import { useNavigate } from "react-router-dom";
import Section3 from "./Section3";
import Navbar from "./Navbar";
import "./Logincstyle.css";
import {useEffect, useState } from "react";
import { getAdminlogin } from "../services/ApiService";
import signin from "./signin.jpg";
import axios from "axios";


function Logina(){
  const navigate = useNavigate();
  const [adminlogin,setAdminlogin]=useState([])
  const [message1, setMessage] = useState('');
  const [message2, setMessage1] = useState('');
  

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleChange1 = (event) => {
    setMessage1(event.target.value);
  };
  
  useEffect(()=>{
      let cpt=true
      getAdminlogin()
      .then(
          res=>{ 
              setAdminlogin(res)
              return() => cpt=false
          }
      )
  
     },[])
  const handleClick = () => {
      let test=0;
      //navigate("/Searchres");
      for(let i in adminlogin){
        if(adminlogin[i].huser_email==message1 && adminlogin[i].huser_password==message2){
          test=1;
        }
      }
      if(test==0){
        alert("incorrect informations");
      }else{
        sessionStorage.setItem("Logina","yes");
        navigate('/Dashb', {
          state: {
            enName: "yes",
  
          }
        });
      }
  }

  const sendpass=()=>{

    let bodyFormData=new FormData();
       
    bodyFormData.append("emailps",document.querySelector("#emailps").value);
    
    

 axios({
  method: "post",
  url: "http://127.0.0.1:8000/ping4/",
  data: bodyFormData,
  headers: { "Content-Type": "application/text" },
})
  .then(function (response) {
    //handle success
    alert("bien Envoyer /// ")
  })
  .catch(function (response) {
    //handle error
    console.log(response);
  });
   
  }


return(
    <>
    
    <Navbar/>
    
    
 
    <section>
        <div class="container-fluid headerdiv p-1 " style={{fontSize: 1.7 + "em"}} >
            <h1 className="headerh p-4" >
            <li className="fa fa-user m-3"></li>  Admin 
            </h1>
        </div>
    </section>
<br/>
    <section >
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-md-9 col-lg-6 col-xl-3" style={{ width: "20%" }}>
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"  className="img-fluid"
          class="img-fluid" alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
    
          
          </div>

          <br/>

          <div class="form mb-4">
          <label for="" class="form-label">Nom d'utilisateur</label>
          <input type="email" id="email" onChange={handleChange} placeholder="Login / E-mail" class="form-control form-control-lg rounded" />
            
          </div>

          <div class="form mb-4">
          <label for="" class="form-label">   Mot de passe :</label>
         <input type="password" id="password" onChange={handleChange1}  placeholder="Mot de passe " class="form-control form-control-lg rounded" />
          </div> 

          <div class="d-flex justify-content-between align-items-center">
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a data-bs-toggle="modal" data-bs-target="#exampleModal" style={{'cursor':'pointer'}} class="text-body">Mot de passe oublié?</a>
          </div>

          <div class="text-lg-start mt-4 pt-2">
            <button type="button"  class="btn btn-primary btn-lg "
              style={{paddingLeft: "2.5rem" , paddingRight: "2.5rem",backgroundColor:"blue"}} onClick={handleClick} >Login</button>
            
                
          </div>

        </form>
      </div>
    </div>
  </div>
 
</section>

    <br/>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Récuperation de mot de pass</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                
                <div class="modal-body">
                      Votre Email :
                    <input className="form-control" type="text" id="emailps"/><br/>
                   
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn bg-danger text-light" data-bs-dismiss="modal">Fermer</button>
                    <button type="button" onClick={sendpass}  class="btn bg-success text-light">Envoyer le mot de pass</button>
                </div>
                

                </div>
            </div>
              </div>
 



    
      
    <Section3/>

    </>
)
}
export default Logina;
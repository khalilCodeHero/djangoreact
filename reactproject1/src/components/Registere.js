
import { useNavigate } from "react-router-dom";
import Section3 from "./Section3";
import Navbar from "./Navbar";
import "./logincstyle.css";
import signup from "./signup.jpg";

import { addEntrelogin } from "../services/ApiService";
function Registere(){
    const navigate = useNavigate();

   const handleClick=()=>{
    let entre={
        "entre_name":document.querySelector("#entrename").value,
        "entre_email":document.querySelector("#email").value,
        "entre_password":document.querySelector("#password").value,
      }
      addEntrelogin(entre)
      .then(res=>{
        alert("Bien Ajouté");
        navigate('/Logine');
      })
    
    
   }
 

return(
    <>
    
    <Navbar/>
    
    
     <section>
        <div class="container-fluid headerdiv p-3 " style={{fontSize: 1.7 + "em"}} >
            <h1 className="headerh p-4">
              Inscrivez-vous Entreprise !
            </h1>
        </div>
    </section>
  
   <br/>
    <div class="container">
    <div class="row d-flex align-items-center justify-content-center ">
   
    <div class="col-md-9 col-lg-6 col-xl-3" >
      <img  width="400px" height="600px" src={signup}  className="img-fluid"
          class="img-fluid" alt="Sample image"/>
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
   
        <form>
          
        <div class="form mb-4">
          <label for="" class="form-label">Nom l'entreprise </label>
          <input type="text" id="entrename"  class="form-control form-control-lg rounded" />
            
          </div>
     
          <div class="form mb-4">
          <label for="" class="form-label">Adresse e-mail</label>
          <input type="email" id="email"  class="form-control form-control-lg rounded" />
            
          </div>

          <div class="form mb-4">
          <label for="" class="form-label">   Mot de passe :</label>
         <input type="password" id="password"  class="form-control form-control-lg rounded" />
          </div> 

    

          
          <button style={{paddingLeft: "2.5rem" , paddingRight: "2.5rem",backgroundColor:"blue"}}  onClick={handleClick} class="btn btn-primary btn-lg ">Creer un compte </button>&nbsp;
         
          <p class="small fw-bold mt-2 pt-1 mb-0">Utilisateur existant ?  <a href="Logine"
                class="link-danger">Connectez vous maintenant</a></p> 

        </form>
      </div>
    </div>
  </div>
 




 <br/>



    
      
    <Section3/>

    </>
)
}
export default Registere;
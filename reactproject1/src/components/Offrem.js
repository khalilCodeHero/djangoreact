import Navbar from "./Navbar";
import Section3 from "./Section3";
import { useLocation } from "react-router-dom";
import {useEffect, useState } from "react";
import {getOffre,addCandidatures} from "../services/ApiService";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Offrem(){
  const navigate = useNavigate();

  const location = useLocation();
  let userId = location.state.userId;
  let myoffre="";
  let mycan="";
  let filer="";
 const [Offre,setOffre]=useState([])
    useEffect(()=>{
      let cpt=true
      getOffre(userId)
      .then(
          res=>{ 
              setOffre(res)
              return() => cpt=false
          }
      )
  
     },[])

     Offre.map(res=>{
      if(res.offre_id==userId){
        
        myoffre={
          "offre_id":userId,
          "offre_soc":res.offre_soc,
          "offre_post":res.offre_post,
          "offre_date":res.offre_date,
          "offre_description":res.offre_description,
          "offre_img":res.offre_img,

        }
      }
     })
     
     

     const handelmyclick=()=>{
     try {
      let infologin=sessionStorage.getItem("loginc");
      if(infologin){
        
      let bodyFormData=new FormData();
      bodyFormData.append("candid_soc",myoffre.offre_soc);
      bodyFormData.append("candid_post",myoffre.offre_post);
      bodyFormData.append("candid_date",myoffre.offre_date);
      bodyFormData.append("candid_canname",document.querySelector("#candid_canname").value);
      bodyFormData.append("candid_canemail",document.querySelector("#candid_canemail").value);
      bodyFormData.append("candid_canadresse",document.querySelector("#candid_canadresse").value);
      bodyFormData.append("candid_canexper",document.querySelector("#candid_canexper").value);
      bodyFormData.append("candid_canbacplus",document.querySelector("#candid_canbacplus").value);
      bodyFormData.append("candid_canmotiv",document.querySelector("#candid_canmotiv").value);
      bodyFormData.append('candid_cv', document.querySelector("#candid_cv").files[0]);

   axios({
    method: "post",
    url: "http://127.0.0.1:8000/Candidatures/",
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (response) {
      //handle success
      alert("CV bien Enregistrer /// ");
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
      
      }else{
        navigate('/Loginc');
      }
     } catch (error) {
      
     }
      
     }




      

     

    return(
        <>

        <Navbar/>

        <section>
        <div class="container-fluid headerdiv p-3 " style={{fontSize: 1.7 + "em"}}>
            <h1 className="headerh p-4">
            <i className="fas fa-question-circle"></i> Consultation d'Offre d'Emploi :
            </h1>
        </div>
    </section>




       
  <div class="container-fluid my-5 py-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-12 col-lg-10 col-xl-8">
        <div class="card">
          <div class="card-body">
            <div class="d-flex flex-start align-items-center">
              <img class="rounded-circle shadow-1-strong me-3"
                src={myoffre.offre_img} alt="avatar" width="60"
                height="60" />
              <div>
                <h6 class="fw-bold text-primary mb-1">
                  Societé {myoffre.offre_soc}
                </h6>
                <p class="text-muted small mb-0">
                {myoffre.offre_post} - {myoffre.offre_date}
                </p>
              </div>
            </div>

            <p class="mt-3 mb-4 pb-2">
            {myoffre.offre_description}
             
            </p>

            
          </div>
          <div class="card-footer py-3 border-0" >
          
             <div class="d-flex flex-start w-100">
            
              <div class=" w-100">
              
                  







              <label className="form-label">Votre Nom Complet :</label> <br/><input type="text" class="form-control" id="candid_canname" name="candid_canname"
                  />
                  <br/>
                  <label className="form-label">Votre Email :</label> <br/><input type="text" class="form-control" id="candid_canemail" name="candid_canemail"
                  />
                  <br/>
                  <label className="form-label">Votre Adresse :</label> <br/><input type="text" class="form-control" id="candid_canadresse" name="candid_canadresse"
                  />
                  <br/>
                  <label className="form-label">Années d'experience :</label> <br/><input type="number" class="form-control" id="candid_canexper" name="candid_canexper" 
                  />
                  <br/>
                  <label className="form-label">Bac Plus :</label> <br/><input type="number" class="form-control" id="candid_canbacplus" name="candid_canbacplus"
                  />
                  <br/>
               <label className="form-label">Votre Motivation :</label> <br/><textarea class="form-control" id="candid_canmotiv" rows="4" name="candid_canmotiv"
                  ></textarea>
                  <br/>
                  <label className="form-label">Votre CV (Format PDF) :</label> <br/>
                  <input type="file" id="candid_cv" name="candid_cv" className="form-control" multiple={true}/>
                
              </div>
            </div>
            <div class="mt-2 pt-1">
              
              
            </div>
            
          </div>
          
        </div>
        <button type="button" onClick={handelmyclick} class="btn bg-primary text-light mt-2">
                Post
        </button>
      </div>
    </div>
  </div>






        <Section3/>



        </>
    )
}
export default Offrem;
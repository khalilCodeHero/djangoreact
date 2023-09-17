import Section3 from "./Section3";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import {useEffect, useState } from "react";
import {getCandidatures} from "../services/ApiService";
import axios from "axios";

function ListCandidatures(){
  
  const clickMe =(event,e) => {
    window.location.href=e.candid_cv;
  }
  const location = useLocation();
  let entreName = location.state.entreName;
  let entrePost = location.state.entrePost;
  let offreimg=location.state.offreimg;
  let mycanlist=[];
  let mycan="";
  const [Cand,setCandidatures]=useState([])
    useEffect(()=>{
      let cpt=true
      getCandidatures()
      .then(
          res=>{ 
              setCandidatures(res)
              return() => cpt=false
          }
      )
  
     },[])


     Cand.map(res=>{
      if(res.candid_soc==entreName && res.candid_post==entrePost){
        
        mycan={
          "candid_id":res.candid_id,
          "candid_soc":res.candid_soc,
          "candid_post":res.candid_post,
          "candid_date":res.candid_date,
          "candid_canname":res.candid_canname,
          "candid_canemail":res.candid_canemail,
          "candid_canadresse":res.candid_canadresse,
          "candid_canexper":res.candid_canexper,
          "candid_canbacplus":res.candid_canbacplus,
          "candid_canmotiv":res.candid_canmotiv,
          "candid_cv":res.candid_cv,
        }
        mycanlist.push(mycan);
      }
     })
  
     const handelresponse=(event,res)=>{
      
      document.querySelector("#gmailinp").value=res.candid_canemail;
            
     }
     
    const handelresponse2=()=>{
      let bodyFormData=new FormData();
      bodyFormData.append("emailm",document.querySelector("#gmailinp").value);
      bodyFormData.append("messagem",document.querySelector("#messageinp").value);

      axios({
        method: "post",
        url: "http://127.0.0.1:8000/ping1/",
        data: bodyFormData,
        headers: { "Content-Type": "application/text" },
      })
        .then(function (response) {
          //handle success
          alert("reply sent successfully");
        })
        .catch(function (response) {
          //handle error
          console.log(response.response.data);
        });
    }







return(
    <>
    
    <Navbar/>
    
    
    <section>
        <div class="container-fluid headerdiv p-2 ">
            <h1 className="headerh p-4" style={{fontSize: 1.7 + "em"}}>
               <li className="fa fa-menu m-3"></li> List des Candidatures 
            </h1>
        </div>
    </section>

    <div className="container-fluid p-5 justify-content-center">
        
        
        
        
        
        
        
       

        {
            mycanlist.map(res=>{
              return  <div class="card mb-4 m-auto" style={{'width':50+'%'}}>
              <div class="card-body">
                <p>Post : {res.candid_post} / Societé : {res.candid_soc}</p>
    
                <div class="d-flex justify-content-between">
                  <div class="d-flex flex-row align-items-center">
                    <img src={offreimg} alt="avatar" width="45"
                      height="45" />
                    <p class="mb-0 ms-2">
                    Candidat : {res.candid_canname} <br/>
                    Candidat Email : {res.candid_canemail} <br/>
                    </p>
                    
                  </div>
                  <div class="d-flex flex-row align-items-center text-primary">
                    <button class="small mb-0 btn btn-primary" onClick={(e)=>handelresponse(e,res)} data-bs-toggle="modal" data-bs-target="#myModal4">Réponse 
                    <i class="fas fa-reply mx-2 fa-xs"></i>
                    </button>
                  </div>
                </div>
                
                <br/>
                    <button className="btn btn-outline-primary mybcd" onClick={(e) => clickMe(e,res)}>Télécharger CV</button>
              </div>
            </div>
            })

        }
    </div>

    









<div class="modal" id="myModal4">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Response : </h4>
      </div>

      <div class="modal-body">
       Email Candidat :  <input type="text" className="form-control" id="gmailinp" disabled/><br/>
        Message : <textarea className="form-control" id="messageinp">

        </textarea>
      </div>

      <div class="modal-footer">
      <button type="button" onClick={handelresponse2} class="btn bg-success text-light" >Envoyer</button>

        <button type="button" class="btn bg-danger text-light" data-bs-dismiss="modal">Fermer</button>
      </div>

    </div>
  </div>
</div>

    <Section3/>
    
    
    </>
)


}
export default ListCandidatures;
import {useEffect, useState } from "react";
import {getAvis} from "../services/ApiService";
import "./s2style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Section1(){
  const navigate = useNavigate();

  const [Avis,setAvis]=useState([])
    useEffect(()=>{
      let cpt=true
      getAvis()
      .then(
          res=>{ 
            setAvis(res)
              return() => cpt=false
          }
      )
  
     },[])

     let Avis1=Avis.filter((res)=>res.avis_id<4);

     const addavis=()=>{
      try {
        let infologin=sessionStorage.getItem("loginc");
        if(infologin){
          
        let bodyFormData=new FormData();
       
        bodyFormData.append("avis_name",document.querySelector("#avis_name").value);
        bodyFormData.append("avis_post",document.querySelector("#avis_post").value);
        bodyFormData.append("avis_eval",document.querySelector("#avis_eval").value);
        bodyFormData.append("avis_content",document.querySelector("#avis_content").value);
        
  
     axios({
      method: "post",
      url: "http://127.0.0.1:8000/Avis/",
      data: bodyFormData,
      headers: { "Content-Type": "application/text" },
    })
      .then(function (response) {
        //handle success
        alert("bien Enregistrer /// ")
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
   <div class=" text-center">
        <h3 class="fw-bold mb-4">Catégories d’emploi</h3>
      
      </div>
                  
        <div class="container">
<div class="row justify-content-center  p-4">


  <div class="col-md-3 m-3">
    <div class="card  style= {{color:'aliceblue'}} ">
      <div class="card-body text-center  ">
      <i class="fas fa-vector-square fa-lg" ></i>
                    
        <h5 class="card-title" >Télécommunication</h5>
      </div>
    </div>
  </div>
  <div class="col-md-3 m-3">
    <div class="card ">
      <div class="card-body text-center">
      <i class="fas fa-street-view fa-lg"></i>         
        <h5 class="card-title">Technicien</h5>
      </div>
    </div>
  </div>
  <div class="col-md-3 m-3">
    <div class="card ">
      <div class="card-body text-center">
      <i class="fas fa-stethoscope fa-lg"></i>
                    
        <h5 class="card-title">Médical</h5>
      </div>
    </div>
  </div>
  <div class="col-md-3 m-3">
    <div class="card ">
      <div class="card-body text-center">
      <i class="fas fa-magic fa-lg"></i>
                    
        <h5 class="card-title">Ingénierie</h5>
      </div>
    </div>
  </div>
  <div class="col-md-3 m-3">
    <div class="card ">
      <div class="card-body text-center">
      <i class="fas fa-landmark fa-lg"></i>                    
        <h5 class="card-title">Comptabilité</h5>
      </div>
    </div>
  </div>
  <div class="col-md-3 m-3">
    <div class="card ">
      <div class="card-body text-center">
     
      <i class="fas fa-user-graduate fa-lg"></i>

        <h5 class="card-title">Éducation</h5>
      </div>
    </div>
  </div>
</div>
</div>





		



   




<section>
  <div class="container py-5">
   
   
   
   
    <div class="row d-flex justify-content-center">
      <div class="col-md-10 col-xl-8 text-center">
        <h3 class="fw-bold mb-4">Nos clients satisfaits</h3>
        <p class="mb-4 pb-2 mb-md-5 pb-md-0">
         Si vous rendez les clients mécontents dans le monde physique,
          ils peuvent chacun en parler à six amis. Si vous rendez les clients 
          mécontents sur internet, ils peuvent chacun en parler à six mille amis.
        </p>
      </div>
    </div>
    <div class="row text-center">







      {
       Avis1.map(res=>{
        return <div class="col-md-4 mb-4 mb-md-0">
          <div class="card">
            <div class="card-body py-4 mt-2">
            
              <h5 class="font-weight-bold">{res.avis_name}</h5>
              <h6 class="font-weight-bold my-3">{res.avis_post}</h6>
              <ul class="list-unstyled d-flex justify-content-center">
                
                {
                  res.avis_eval
                  
                }
                
              </ul>
              <p class="mb-2">
                <i class="fas fa-quote-left pe-2"></i>{res.avis_content} </p>
            </div>
          </div>
        </div>
  
       })
      }






      






    </div>
  </div>
</section>


  <div className="container-fluid" style={{'textAlign':'center'}}>

    <button  className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add New Avis +</button>

  </div>
<br/><br/>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add New Avis</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      <div class="modal-body">
        Nom :
        <input className="form-control" type="text" id="avis_name"/><br/>
        Post :
        <input  className="form-control" type="text" id="avis_post"/><br/>
        Evalution :
        <input  className="form-control" type="number" id="avis_eval" min={0} max={5}/><br/>
        Content :
        <textarea  className="form-control"  id="avis_content"></textarea>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn bg-danger text-light" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={addavis} class="btn bg-success text-light">Save changes</button>
      </div>
      

    </div>
  </div>
</div>


















  </>
      )
    }
    export default Section1;
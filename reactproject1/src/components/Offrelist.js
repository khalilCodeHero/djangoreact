import Navbar from "./Navbar";
import Section3 from "./Section3";
import {useEffect, useState } from "react";
import { addOffre , getOffre,editOffre,deleteOffre,getCandidatures} from "../services/ApiService";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";


 
function Offrelist(){
  const navigate = useNavigate();
  const location = useLocation();
  let enName = "";
  try{
    enName=location.state.enName;
  }catch(error){
    navigate('/logine');
  }
  let message="";
  let response="";

  const sendMessage = async () => {
    try {
      message="khalil";
      response = await axios.post('http://localhost:8000/ping/', { message });
      response=response.data.response;
      return response
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };


  const aifunc=()=>{
    sendMessage()
    .then(res=>{
      res.map(rs=>{
        alert(rs);
      })
    }

    )
   
  }







  
  const [cpt1,cpt2]=useState()
  const [Offre,setOffre]=useState([])
  useEffect(()=>{
    let cpt=true
    getOffre()
    .then(
        res=>{ 
            setOffre(res)
            return() => cpt=false
        }
    )

   },[])
   const [candidatures,setCandidatures]=useState([])
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


   

   let filteredoffre=Offre.filter(res=>res.offre_soc==enName);
const handeladdoffre=(e)=>{
  e.preventDefault();
  let offre={
    "offre_soc":document.querySelector("#offre_soc").value,
    "offre_post":document.querySelector("#offre_post").value,
    "offre_date":document.querySelector("#offre_date").value,
    "offre_description":document.querySelector("#offre_description").value,
  }
  addOffre(offre)
  .then(res=>{
    alert("Bien Ajouté");
  })

}

const handeleditoffre=(offre)=>{
  document.querySelector("#offre_soc1").value=offre.offre_soc;
  document.querySelector("#offre_date1").value=offre.offre_date;
  document.querySelector("#offre_post1").value=offre.offre_post;
  document.querySelector("#offre_description1").value=offre.offre_description;

cpt2(offre.offre_id);



}

const handeladdoffre1=()=>{
  let offre={
    "offre_soc":document.querySelector("#offre_soc1").value,
    "offre_post":document.querySelector("#offre_post1").value,
    "offre_date":document.querySelector("#offre_date1").value,
    "offre_description":document.querySelector("#offre_description1").value,
  }

  

  editOffre(offre,cpt1);
 
}
 
const handeldeleteoffre=(id)=>{
  deleteOffre(id)
  .then(
    alert("deleted successfuly")
  )
}

const handelconsultoffre=(offre)=>{

navigate('/ListCandidatures', {
  state: {
    entreName: offre.offre_soc,
    entrePost: offre.offre_post,
    offreimg:offre.offre_img,

  }
});

}
const myaifunc=(id)=>{
  let mdata=Offre.filter(res=>res.offre_id==id);
  
  
  let bodyFormData=new FormData();
  bodyFormData.append("offre_soc",mdata[0].offre_soc);
  bodyFormData.append("offre_post",mdata[0].offre_post);

  axios({
    method: "post",
    url: "http://127.0.0.1:8000/ping/",
    data: bodyFormData,
    headers: { "Content-Type": "application/text" },
  })
    .then(
      rs=>{
       let tb= rs.data.response;
       tb.map(ss=>{
        alert(ss);
       })
      }
    )
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
               <li className="fa fa-list m-3" ></li> Offres Postulés  
            </h1>
        </div>
    </section>




        <div class="card d-flex p-5" style={{  marginLeft: "170px",
  marginRight: "170px"}} >
  <div class="card-body">
  <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Ajouter un Offre +</button>&nbsp;

  <button className="btn btn-success" onClick={aifunc}>Meilleurs candidats avec IA <i class="fa fa-solid fa-microchip-ai"></i></button>

  
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Ajouter un Offre : </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form onSubmit={handeladdoffre}>
      <label className="form-label">Societé :</label> <br/><input type="text" class="form-control" name="offre_soc" id="offre_soc"
                  />
                  <br/>
      <label className="form-label">Post :</label> <br/><input type="text" class="form-control" name="offre_post" id="offre_post"
                  />
                  <br/>
      <label className="form-label">Date :</label> <br/><input type="date" class="form-control" name="offre_date" id="offre_date"
                  />
                  <br/>
      <label className="form-label">Description :</label> <br/><textarea class="form-control" name="offre_description" rows="4" id="offre_description"
                  ></textarea>
                  <br/>
                  <button style={{ backgroundColor:"blue" }} type="submit" class="btn  btn-primary " >Enregistrer</button>&nbsp;
<button style={{ backgroundColor:"gray" }} type="button" class="btn  btn-primary " data-bs-dismiss="modal">Close</button>
                  </form>   
                     
      </div>
      <div class="modal-footer">


      </div>
      
    </div>
  </div>
</div>













  
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modifier un Offre : </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form onSubmit={handeladdoffre1}>
      <label className="form-label">Societé :</label> <br/><input type="text" class="form-control" name="offre_soc1" id="offre_soc1"
                  />
                  <br/>
      <label className="form-label">Post :</label> <br/><input type="text" class="form-control" name="offre_post1" id="offre_post1"
                  />
                  <br/>
      <label className="form-label">Date :</label> <br/><input type="date" class="form-control" name="offre_date1" id="offre_date1"
                  />
                  <br/>
      <label className="form-label">Description :</label> <br/><textarea class="form-control" name="offre_description1" rows="4" id="offre_description1"
                  ></textarea>
                  <br/>
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary m-2" id="reserveid">Enregistrer</button>   
                  </form>         
      </div>
      <div class="modal-footer">


      </div>
      
    </div>
  </div>
</div>















<br/><br/><br/>

    <table class="table-responsive ">
    </table>
    <table class="table table-hover table-forum text-center">
   
      <thead>
        <tr>
          
          <th class="text-left">Topic</th>
          <th>Nombre des Candidats</th>
          <th>Actions</th>
          <th>Candidatures</th>
        </tr>
      </thead>
     
      <tbody>
        {
          filteredoffre.map(res=>{
            return  <tr>
         
          <td class="text-start">
            <a href="#" class="font-weight-bold blue-text">
            {res.offre_soc} / {res.offre_post}
            </a>
            <div class="my-2">
              
              <span class="badge bg-secondary mx-1">{res.offre_date}</span>
              
            </div>
          </td>
          <td>
            <a  class="text-dark">
              <span>{candidatures.filter(res=>res.candid_post==res.offre_post).length}</span>
              
            </a>
          </td>
          <td>
            <button className="btn btn-success m-1"  onClick={()=>handeleditoffre(res)} data-bs-toggle="modal" data-bs-target="#exampleModal1">Modifier</button>
            <button className="btn btn-danger m-1" onClick={()=>handeldeleteoffre(res.offre_id)}>Supprimer</button>
            <button className="btn btn-warning m-1 text-light" onClick={()=>myaifunc(res.offre_id)}>Ai : Meilleurs Candidats</button>

          </td>
          <td>
            <button className="btn btn-info m-1 text-light" onClick={()=>handelconsultoffre(res)}>Consulter</button>
            
          </td>
        </tr>
        })
        }



        

      </tbody>
    </table>
    <br/>






    <div class="d-flex justify-content-center">
      <nav class="my-2 pt-2">
        <ul class="pagination pagination-circle pg-info mb-0">
          <li class="page-item clearfix d-none d-md-block">
            <a href="#" class="page-link waves-effect">
               </a>
          </li>
          
          <li class="page-item">
            <a href="#" class="page-link waves-effect" aria-label="Previous">
              <span aria-hidden="true">«</span>
              <span class="sr-only">
                 </span>
            </a>
          </li>
          
          <li class="page-item">
            <a href="#" class="page-link waves-effect">11</a>
          </li>
          <li class="page-item">
            <a href="#" class="page-link waves-effect">12</a>
          </li>
          <li class="page-item active">
            <a href="#" class="page-link waves-effect">13</a>
          </li>
          <li class="page-item">
            <a href="#" class="page-link waves-effect">14</a>
          </li>
          <li class="page-item">
            <a href="#" class="page-link waves-effect">15</a>
          </li>
         
          <li class="page-item">
            <a href="#" class="page-link waves-effect" aria-label="Next">
              <span aria-hidden="true">»</span>
              <span class="sr-only"></span>
            </a>
          </li>
        
          <li class="page-item clearfix d-none d-md-block">
            <a href="#" class="page-link waves-effect">
               </a>
          </li>
        </ul>
      </nav>
      
    </div>
    
  </div>
</div>


<br/>



        <Section3/>
    </>
)
}
export default Offrelist;
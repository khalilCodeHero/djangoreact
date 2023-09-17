import "./s3style.css";
import {useEffect, useState } from "react";
import {getOffre,getUserlogin,getCandidatures,getEntrelogin,getArticle} from "../services/ApiService";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Section2(){
  
  const navigate = useNavigate();
  const location = useLocation();
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
  const [Article,setArticle]=useState([])
    useEffect(()=>{
      let cpt=true
      getArticle()
      .then(
          res=>{ 
            setArticle(res)
              return() => cpt=false
          }
      )
  
     },[])

    
     const [entre,setEntrelogin]=useState([])
    useEffect(()=>{
      let cpt=true
      getEntrelogin()
      .then(
          res=>{ 
              setEntrelogin(res)
              return() => cpt=false
          }
      )
  
     },[])
     const [userl,setUserlogin]=useState([])
    useEffect(()=>{
      let cpt=true
      getUserlogin()
      .then(
          res=>{ 
              setUserlogin(res)
              return() => cpt=false
          }
      )
  
     },[])
     const [Candid,setCandidatures]=useState([])
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

     const gotoarticle=(id)=>{
      alert(id);
      navigate('/Article', {
        state: {
          articleid: id,
        
        }
      });
     }


let Article1=Article.filter((res)=>res.article_id<4);

return(
    <>
<div class="container-fluid col p-4 mygd">


  <div class="row justify-content-center">
      <table>
        <tr>
       

          <td class="mytd"><span class="mysp"> <i class="fa fa-tasks" aria-hidden="true"></i> </span><br/><span class="mysp">{Offre.length} </span><br/> Offres d'emploi</td>
          <td  class="mytd"><span class="mysp"><i class="fas fa-users"></i> </span><br/><span class="mysp">{userl.length} </span><br/>   Candidat</td>
          <td  class="mytd"><span class="mysp"><i class="fas fa-share-alt"></i> </span><br/><span class="mysp">{entre.length} </span><br/> Entreprise</td>
          <td  class="mytd"><span class="mysp"><i class="fas fa-briefcase"></i>  </span><br/><span class="mysp">{Candid.length} </span><br/>  Appliquer</td>
        </tr>
      </table>
  </div>
  

</div>








<br></br>
<div class="row d-flex justify-content-center">
      <div class="col-md-10 col-xl-8 text-center">
        <h3 class="fw-bold mb-4">Orientation</h3>
        <p class="mb-4 pb-2 mb-md-5 pb-md-0">
        Consultez nos dernières nouvelles de la section suivante


        </p>
      </div>
    </div>

  <div class="carousel-inner py-4">
    
    <div class="carousel-item active">
      <div class="container">
        <div class="row">


{
           Article1.map(res=>{
            return  <div class="col-lg-4 d-none d-lg-block">
            <div class="card mb-3">
              <img 
                src= {res.article_img}
                class="card-img-top"
                alt="Sunset Over the Sea"
                style={{'height':13+'rem'}}
              />
              
              <div class="card-body">
              <h5 class="card-title">{res.article_titre}</h5>
                <p class="card-text">
               {res.article_content}
              </p>
                <button onClick={()=>gotoarticle(res.article_id)}  class="btn btn-outline-success"> <span class="ms-2">&#x2192;</span> go to article</button>
              </div>
             
            </div>
          </div>
           })

}          








        </div>
      </div>
    </div>

   
  
  </div>



    </>
)
}
export default Section2;
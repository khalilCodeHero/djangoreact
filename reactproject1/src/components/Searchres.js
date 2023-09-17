import "./searchresstyle.css";
import Section3 from "./Section3";
import Navbar from "./Navbar";
import {useEffect, useState } from "react";
import {getOffre} from "../services/ApiService";
import { useNavigate } from "react-router-dom";

function Searchres(){
    let Offre1="";
    const navigate = useNavigate();
  /* if(sessionStorage.getItem("loginc")==null){
    navigate("/loginc");
  } */
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


     if(sessionStorage.getItem("adresse")!=""){
        Offre1=Offre.filter(res=>res.offre_adresse==sessionStorage.getItem("adresse"));
     }
     
     if(sessionStorage.getItem("post")!=null && sessionStorage.getItem("post")!=""){
        Offre1=Offre1.filter(res=>res.offre_post==sessionStorage.getItem("post"));
     }
     if(sessionStorage.getItem("entre")!=null && sessionStorage.getItem("entre")!=""){
        
        Offre1=Offre1.filter(res=>res.offre_soc==sessionStorage.getItem("entre"));
     }

    

     const handelclick=(e)=>{
        navigate('/Offrem', {
            state: {
              userId: e,
            }
          });
     }
return(
    <>
  <Navbar/>

      <section>
        <div class="container-fluid headerdiv p-2 ">
            <h1 className="headerh p-4" style={{fontSize: 1.7 + "em"}}>
               <li className="fa fa-search m-3"></li> Résultats de  recherche
            </h1>
        </div>
    </section>
    
    <section>
        <div className="container-fluid col p-5">

                                
                

                <div class="table-responsive">
                <table class="table table-striped text-successtable-border border-light">
                    <thead class="border-light">
                  
                    <tr>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    


                    {Offre1.map(res=>{
                        return <tr>
                        
                        <td className="p-5">

                        <div class="row gx-5">
                            <div class="col-md-6 mb-4">
                                <div class="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
                                <img src="https://mdbcdn.b-cdn.net/img/new/slides/080.webp" class="img-fluid" />
                                <a href="#!">
                                    <div class="mask" ></div>
                                </a>
                                </div>
                            </div>

                            <div class="col-md-6 mb-4">
                                <span class="badge bg-danger px-2 py-1 shadow-1-strong mb-3">{res.offre_date}</span>
                                <h4><strong>{res.offre_soc} : {res.offre_post}</strong></h4>
                                <p class="text-muted m-3">
                                {res.offre_description}
                                </p>
                                <button type="button" onClick={()=>handelclick(res.offre_id)} class="btn bg-primary text-light m-3">Read more</button>
                            </div>
                            </div>


                        </td>
                    
                    </tr>
                   


                  })}



                    </tbody>
                </table>
                </div>





                <nav aria-label="..." >
                <ul class="pagination pagination-lg ">
                    <li class="page-item active m-1" aria-current="page">
                    <span class="page-link">
                        1
                        <span class="visually-hidden">(current)</span>
                    </span>
                    </li>
                    <li class="page-item m-1"><a class="page-link" href="#">2</a></li>
                    <li class="page-item m-1"><a class="page-link" href="#">3</a></li>
                </ul>
                </nav>
        </div>
    </section>



<Section3/>
    </>
)
}
export default Searchres;
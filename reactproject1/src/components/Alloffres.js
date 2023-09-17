import Section3 from "./Section3";
import Navbar from "./Navbar";
import "./Alloffres.css";
import {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import {getOffre} from "../services/ApiService";

function Alloffres(){
    const navigate = useNavigate();

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


     const handelclick=(e)=>{
        navigate('/Offrem', {
            state: {
              userId: e,
            }
          })}




    return(
        <>
        
        <Navbar/>
        

        <section>
        <div class="container-fluid headerdiv p-3 " style={{fontSize: 1.7 + "em"}}>
            <h1 className="headerh p-4">
           <li class="fas fa-bars"></li> Offres List  
            </h1>
        </div>
    </section>




        <div className="container-fluid p-5 row">


           {
            Offre.map(res=>{
                return  <div className="col-sm-3 mb-4">
                <div class="card" >
                <img src={res.offre_img} class="card-img-top w-100" style={{'height':10+'rem'}} alt="..."/>
                <div class="card-body">
                    <h4>{res.offre_post}</h4>
                    <p class="card-text">{(res.offre_description).substr(0, 25)} ...</p>
                    <br/><button className="btn text-light" onClick={()=>handelclick(res.offre_id)} style={{'background':'#20c997'}}>Lire La Suite...</button>
                </div>
                </div>
            </div>
            })
           }

            
        </div>



































        <Section3/>

</>
)
}
export default Alloffres;
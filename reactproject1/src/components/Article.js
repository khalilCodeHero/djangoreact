import Section3 from "./Section3";
import Navbar from "./Navbar";
import {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {getArticle} from "../services/ApiService";
import { useLocation } from "react-router-dom";

function Article(){
    const [Article,setArticle]=useState([])
    const location = useLocation();
    let articleid = location.state.articleid;
    let Article1=Article.filter((res)=>res.article_id==articleid);
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


   




    return(
        <>
        
        <Navbar/>
        

        <section>
        <div class="container-fluid headerdiv p-3 " style={{fontSize: 2 + "em"}}>
            <h1 className="headerh p-5">
           <li class="fas fa-bars"></li> Article  
            </h1>
        </div>
    </section>




        <div className="container-fluid p-5 row justify-centent-center"  style={{'textAlign':'center'}}>


           {
           Article1.map(res=>{
            return <div class="col d-none d-lg-block ">
            <div class="card mb-3">
              <img 
                src= {res.article_img}
                class="card-img-top"
                alt="Sunset Over the Sea"
                style={{'height':30+'rem'}}
              />
              
              <div class="card-body">
              <h5 class="card-title h1">{res.article_titre}</h5>
                <p class="card-text">
               {res.article_content}
              </p>
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
export default Article;
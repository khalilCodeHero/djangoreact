import "./s3style.css";
import {useEffect, useState } from "react";
function header(){
  const handelclick=()=>{
    let adresse = "";
    let post = "";
    let entreInput = "";
      sessionStorage.setItem("adresse","");
      sessionStorage.setItem("post","");
      sessionStorage.setItem("entre","");
    try{
      
    adresse=document.querySelector("#adresseInput").value;
    post=document.querySelector("#postInput").value;
    entreInput=document.querySelector("#entreInput").value;
    if((adresse!="" && adresse!=null) || (post!="" && post!=null) || (entreInput!="" && entreInput!=null)){

      sessionStorage.setItem("adresse",adresse);
      sessionStorage.setItem("post",post);
      sessionStorage.setItem("entre",entreInput);
      window.location.href="/searchres";


    }else{
      alert("remplir les champs");
    }
    }catch(error){
    }
  }

  
  
    return(
        <>
        
      
  <div
    id="intro-example"
    class="p-5 text-center bg-image"
    
  >

    <div class="mask z-[10000]">
    
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-white">
          
          
                <input type="text" id="entreInput" placeholder="Recherche par mots clés..." class="form-control form4Example1 m-2" />
                <input type="text"  id="postInput" placeholder="Recherche par Fonction..."  class="form-control form4Example1 m-2" />
                <input type="text" id="adresseInput" placeholder="Recherche par Region..."  class="form-control form4Example1 m-2" />
                <button  placeholder="Rechercher" onClick={handelclick}  class="form-control text-dark form4Example1 m-2" >
                  <li className="fa fa-search"></li>
                </button>
           

        
        </div>
      </div>
    </div>
  </div>
  

        
        </>
    )
    }
export default header;
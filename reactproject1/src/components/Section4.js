import { Button } from "bootstrap";
import {useEffect, useState } from "react";
import {Link} from 'react-router-dom'


import "./s4style.css";

function Section4(){
    
    function handleClick(event) {
           alert("ok");
      }
return(
    <>
    <div class="container-fluid row myrow p-5"  >
        
        <h1   style={{ fontWeight:'bold',    fontSize:"34px" }}>Trouvez l’emploi souhaité</h1>
        <spam>Recherchez les emplois les meilleurs, parfaits et appropriés qui correspond à vos compétences dans votre expertise aire.</spam>
        <br/>
        <div class="col-md-3 mycol p-5">
                
                <div class="row p-2 ">
                    
                    <div class=" hover-zoom ripple  imgcom">
                        <img src="https://www.rekrute.com/rekrute/file/jobOfferLogo/jobOfferId/139483"
                            class="rounded imgcom" />
                        <a href="#!">
                            <div class="mask " >
                            </div>
                            <div class="hover-overlay">
                            <div class="mask"></div>
                            </div>
                        </a>
                    </div>

                </div>
                <div class="row p-2">
                    
                    <div class=" hover-zoom ripple imgcom">
                        <img src="https://www.novojob.com/maroc/attachments/company_logo/logo_2395767_large.jpg"
                            class="rounded imgcom" />
                        <a href="#!">
                            <div class="mask" >
                            </div>
                            <div class="hover-overlay">
                            <div class="mask"></div>
                            </div>
                        </a>
                    </div>

                </div>                
                <div class="row p-2">
                    
                    <div class=" hover-zoom ripple imgcom">
                        <img src="https://www.rekrute.com/rekrute/file/jobOfferLogo/jobOfferId/139620"
                            class="rounded imgcom" />
                        <a href="#!">
                            <div class="mask" >
                            </div>
                            <div class="hover-overlay">
                            <div class="mask"></div>
                            </div>
                        </a>
                    </div>

                </div>                
        </div>   
            

















       
        <div class="col-md-6 p-5">
                <div class="card">
                <div class="card-body">
                <div class="ripple imgcom">
                <img src="https://sp-ao.shortpixel.ai/client/to_avif,q_glossy,ret_img,w_700,h_500/https://mouhim.ma/wp-content/uploads/2020/10/Pcd3Tzpi49H6bYu8KnDl-700x500.jpg"
                            class="rounded imgcom" />
                        <a href="#!">
                            <div class="mask" >
                            </div>
                            <div class="hover-overlay">
                            <div class="mask"></div>
                            </div>
                        </a>
                    </div>
                    
            
                     
                </div>
                </div>
                <br/><br/>
                <Link to='/Alloffres'>
                <button class="btn btn-secondary" name="firstName" >Voir tous les Offres d'emploi</button>
                </Link>
        </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        <div class="col-md-3 p-5">
                
                <div class="row p-2">
                    
                    <div class=" hover-zoom ripple imgcom">
                    <img src="https://www.rekrute.com/rekrute/file/jobOfferLogo/jobOfferId/138541"
                            class="rounded imgcom" />
                        <a href="#!">
                            <div class="mask" >
                            </div>
                            <div class="hover-overlay">
                            <div class="mask"></div>
                            </div>
                        </a>
                    </div>

                </div>
                <div class="row p-2">
                    
                    <div class=" hover-zoom ripple imgcom">
                        <img src="https://www.rekrute.com/rekrute/file/jobOfferLogo/jobOfferId/138167"
                            class="rounded imgcom" />
                        <a href="#!">
                            <div class="mask" >
                            </div>
                            <div class="hover-overlay">
                            <div class="mask"></div>
                            </div>
                        </a>
                    </div>

                </div>                
                <div class="row p-2">
                    
                    <div class=" hover-zoom ripple imgcom"> 
                        <img src="https://www.rekrute.com/rekrute/file/jobOfferLogo/jobOfferId/139706"
                            class="rounded imgcom" />
                        <a href="#!">
                            <div class="mask" >
                            </div>
                            <div class="hover-overlay">
                            <div class="mask"></div>
                            </div>
                        </a>
                    </div>

                </div>  
                             
        </div>

    
    </div>
    </>
)
}
export default Section4;
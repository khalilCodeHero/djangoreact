import Section3 from "./Section3";
import Navbar from "./Navbar";
import {addMessage} from "../services/ApiService";
import "./s2style.css";

function Contact(){

    const handelclick=()=>{
        
        let message={
            "message_name":document.querySelector("#name").value,
            "message_email":document.querySelector("#email").value,
            "message_subject":document.querySelector("#subject").value,
            "message_mess":document.querySelector("#message").value,
        }
        addMessage(message)
        .then(
            alert("Message bien envoyé")
        )
    }

return(
    <>
    
    <Navbar/>
    
    

    <section>
        <div class="container-fluid headerdiv p-3 " style={{fontSize: 1.7 + "em"}}>
            <h1 className="headerh p-4">
            Contact
            </h1>
        </div>
    </section>

    




<section class="contact-page-sec">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="contact-info">
            <div class="contact-info-item">
              <div class="contact-info-icon">
                <i class="fas fa-map-marked"></i>
              </div>
              <div class="contact-info-text">
                <h2>adresse</h2>
                <span>N°13 , av wifak zhronia</span> 
                <span>Meknes , MAROC</span> 
              </div>
            </div>            
          </div>          
        </div>          
        <div class="col-md-4">
          <div class="contact-info">
            <div class="contact-info-item">
              <div class="contact-info-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="contact-info-text">
                <h2>E-mail</h2>
                <span>info@gmail.com</span> 
                <span>jobligne@gmail.com</span>
              </div>
            </div>            
          </div>                
        </div>                
        <div class="col-md-4">
          <div class="contact-info">
            <div class="contact-info-item">
              <div class="contact-info-icon">
                <i class="fas fa-clock"></i>
              </div>
              <div class="contact-info-text">
                <h2>temps de bureau</h2>
                <span>Lundi - Vendredi  9h00 - 16h00</span>
                <span>Samedi   9h00 - 13h00</span>
              </div>
            </div>            
          </div>          
        </div>          
      </div>
      <div class="row">
        <div class="col-md-8">
          <div class="contact-page-form">
          
            <form >
              <div class="row">
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="text" placeholder="Votre Nom" id="name" name="name" />
                </div>
              </div>  
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="email" placeholder="E-mail" id="email" name="email"required/>
                </div>
              </div>                              
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="text" placeholder="Numéro de téléphone" name="phone"/>
                </div>
              </div>  
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="text" placeholder="Subject" name="subject"/>
                </div>
              </div>                
              <div class="col-md-12 message-input">
                <div class="single-input-field">
                  <textarea  placeholder="Écrivez votre message" name="message"></textarea>
                </div>
              </div>                                                
              <div class="single-input-fieldsbtn">
                <input type="submit" onClick={handelclick} value="Envoyer Message"/>
              </div>                          
            </div>
            </form>   
          </div>      
        </div>
        <div class="col-md-4">        
          <div class="contact-page-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105994.60207789745!2d-5.620422237824045!3d33.881120096808466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda044d23bfc49d1%3A0xfbbf80a99e4cde18!2zTWVrbsOocw!5e0!3m2!1sfr!2sma!4v1693859381908!5m2!1sfr!2sma" width="100%" height="450" frameborder="0"  allowfullscreen></iframe>
            
          </div>          
        </div>        
      </div>
    </div>
  </section>
    <br/>
      
    <Section3/>

    </>
)
}
export default Contact;
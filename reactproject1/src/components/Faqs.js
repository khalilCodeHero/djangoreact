import Section3 from "./Section3";
import Navbar from "./Navbar";
import "./s2style.css";


function Faqs(){
return(
    <>
        <Navbar/>

        <section>
        <div class="container-fluid headerdiv p-3 " style={{fontSize: 1.7 + "em"}}>
            <h1 className="headerh p-4">
            <i className="fas fa-question-circle"></i> Faqs
            </h1>
        </div>
    </section>


<div class="container py-5">
<div class="row row_branchen">
<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 " >
  <div class="card" style={{'height':12+'rem'}}>
    <a href="">
     
        <div class="card-body pb-4" >
          <h3 class="card-title" style={{ fontWeight:'bold',fontSize:"17px" , color:"gray"}}>Comment s'inscrire sur le site d'emploi</h3>
          <p class="card-text">Cliquez en haut de la page à droite sur le lien « Inscription » et choisissez ensuite l´option « Vous êtes

un candidat » personne à la recherche d’un emploi ou « Vous êtes un recruteur » personne qui

offre un emploi.



Un formulaire d’inscription vous sera ensuite proposé.



</p>
        </div>
      </a>
  </div>
</div>
  
<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
  <div class="card"  style={{'height':12+'rem'}}>
    <a href="">
    
        <div class="card-body pb-4">
          <h3 class="card-title " style={{ fontWeight:'bold',fontSize:"17px" , color:"gray"}}>Je n'arrive pas a me connecter sur le site d'emploi,pourqoui ?</h3>
          <p class="card-text">Il y a 3 raisons possibles :



1. Vous avez renseigné une mauvaise adresse email.

2. Vous avez renseigné un mauvais mot de passe.

3. Vous n’êtes peut-être pas inscrit. Dans ce cas, cliquez sur « Inscription » en haut de la page à

droite.</p>
        </div>
      </a>
  </div>
</div>
  
<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
  <div class="card"  style={{'height':12+'rem'}}>
    <a href="">
     
        <div class="card-body pb-4">
          <h3 class="card-title" style={{ fontWeight:'bold',fontSize:"17px" , color:"gray" }}>Je ne recois pas de mail de confirmation</h3>
          <p class="card-text">S Il est possible que le mail d'activation que nous vous envoyons soit intercepté par votre fournisseur d'accès à Internet.</p>
          <p class="card-text">S Il est possible que le mail d'activation que nous vous envoyons soit intercepté par votre fournisseur d'accès à Internet..</p>

        </div>
      </a>
  </div>
</div>
<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
  <div class="card"  style={{'height':12+'rem'}}>
    <a href="">
     
        <div class="card-body pb-4">
          <h3 class="card-title" style={{ fontWeight:'bold',fontSize:"17px" , color:"gray" }}>Comment fonctionnent les rechreches d'offres d'emplois ou de profils CV sur le site d'emplois </h3>
          <p class="card-text">La recherche du site s´appelle en informatique une recherche à facette. Elle vous permet de trouver

des résultats correspondants à vos demandes en saisissant un mot-clé.</p>

        </div>
      </a>
  </div>
</div>
<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
  <div class="card"  style={{'height':12+'rem'}}>
    <a href="">
     
        <div class="card-body pb-4">
          <h3 class="card-title" style={{ fontWeight:'bold',fontSize:"17px" , color:"gray" }}>J'ai oublie mon mot de passe. Comment puis_je me connecter ?</h3>
          <p class="card-text">Allez sur la page « Se connecter » et cliquez sur le lien « Demander un nouveau mot de passe ». Vous

serez redirigé vers une nouvelle page vous demandant votre adresse email. </p>

        </div>
      </a>
  </div>
</div>
<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
  <div class="card"  style={{'height':12+'rem'}}>
    <a href="">
     
        <div class="card-body pb-4">
          <h3 class="card-title" style={{ fontWeight:'bold',fontSize:"17px" , color:"gray" }}>D'ou proviennent les offres d'emploi et les profils CV ?</h3>
          <p class="card-text">Les offres d’emploi proviennent des recruteurs 
          qui se sont inscrits sur le site d´emploi et qui y

déposent des annonces pour des postes au sein de leurs sociétés.</p>

        </div>
      </a>
  </div>
</div>

</div>  
</div>



        <Section3/>
    </>
)
}
export default Faqs;
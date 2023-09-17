import Navbar from "./Navbar";
import Section3 from "./Section3";
function Userreply(){
return(
    <>
            <Navbar/>


    <section>
        <div class="container-fluid headerdiv p-2 ">
            <h1 className="headerh p-4" style={{fontSize: 1.7 + "em"}}>
               <li className="fa fa-message m-3"></li> Suivi votre Candidatures
            </h1>
        </div>
    </section>


    <div class="row d-flex justify-content-center p-5  container-fluid">
  <div class="col-md-8 col-lg-6  container-fluid">
    <div class="card shadow-0 border container-fluid" >
      <div class="card-body p-4 container-fluid">
        

       

       

        <div class="card mb-4">
          <div class="card-body">
            <p>Post ingénieur d'informatique</p>

            <div class="d-flex justify-content-between">
              <div class="d-flex flex-row align-items-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp" alt="avatar" width="25"
                  height="25" />
                <p class="small mb-0 ms-2">Societé BMCI</p>
                
              </div>
              <div class="d-flex flex-row align-items-center text-primary">
                <p class="small mb-0">Réponse</p>
                <i class="fas fa-thumbs-up mx-2 fa-xs" ></i>
              </div>
            </div>
            <br/>
                <button className="btn btn-outline-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">Read more...</button>
          </div>
        </div>





        <div class="card mb-4">
          <div class="card-body">
            <p>Post ingénieur d'informatique</p>

            <div class="d-flex justify-content-between">
              <div class="d-flex flex-row align-items-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp" alt="avatar" width="25"
                  height="25" />
                <p class="small mb-0 ms-2">Societé BMCI</p>
                
              </div>
              <div class="d-flex flex-row align-items-center text-primary">
              <p class="small mb-0">Réponse</p>
                <i class="fas fa-thumbs-down mx-2 fa-xs" ></i>
              </div>
            </div>
            <br/>
                <button className="btn btn-outline-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">Read more...</button>
          </div>
        </div>





        <div class="card mb-4">
          <div class="card-body">
            <p>Post ingénieur d'informatique</p>

            <div class="d-flex justify-content-between">
              <div class="d-flex flex-row align-items-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp" alt="avatar" width="25"
                  height="25" />
                <p class="small mb-0 ms-2">Societé BMCI</p>
                
              </div>
              <div class="d-flex flex-row align-items-center text-primary">
              <p class="small mb-0">Réponse</p>
                <i class="fas fa-thumbs-down mx-2 fa-xs" ></i>
              </div>
            </div>
            <br/>
                <button className="btn btn-outline-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">Read more...</button>
          </div>
        </div>





        <div class="card mb-4">
          <div class="card-body">
            <p>Post développeur d'informatique</p>

            <div class="d-flex justify-content-between">
              <div class="d-flex flex-row align-items-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp" alt="avatar" width="25"
                  height="25" />
                <p class="small mb-0 ms-2">Societé BMCI</p>
                
              </div>
              <div class="d-flex flex-row align-items-center text-primary">
                <p class="small mb-0">Réponse</p>
                <i class="fas fa-thumbs-down mx-2 fa-xs" ></i>
                
              </div>
            </div>
            <br/>
                <button className="btn btn-outline-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">Read more...</button>
          </div>
        </div>







       
      </div>
    </div>
  </div>
</div>


                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Reply :</h5>
                        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div> 

    <Section3/>

    </>
)
}
export default Userreply;
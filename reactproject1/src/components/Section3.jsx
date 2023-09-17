import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";
import "./btnsmstyle.css";
const Section3 = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <p >
         Pour recevoir les dernières nouvelles de notre site Web, <br></br>veuillez nous inscrire ici
        </p>
        <div>
          <input
            type="text"
            placeholder="Enter Votre Email"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
          >
         Envoyer
          </button>
        </div>
      </div>
     
      <ItemsContainer />
    
      <table className="mytable m-auto">
        <tr>
        <td>
            <a href="https://www.facebook.com" class="btn  text-light rounded-circle btnsm  mx-1">
              <i class="fab fa-facebook-f"></i>
            </a>
        </td>
        <td>
            <a  href="https://www.twitter.com" class="btn text-light rounded-circle btnsm  mx-1">
              <i class="fab fa-twitter"></i>
            </a>
        </td>
        <td>
            <a href="https://www.youtube.com" class="btn  text-light rounded-circle btnsm  mx-1">
              <i class="fab fa-youtube"></i>
            </a>
        </td>
        <td>
            <a href="https://www.instagram.com" class="btn  text-light rounded-circle btnsm  mx-1">
              <i class="fab fa-instagram"></i>
            </a>
        </td>
        </tr>
      </table>
      <br></br>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span >Copyright 2023, Asmae. Tous droits réservés.</span>
      

     
      </div>
    </footer>
  );
};

export default Section3;
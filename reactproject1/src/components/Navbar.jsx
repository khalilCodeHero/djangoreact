import React, { useState } from 'react'
import Button from './Button';
import "./s2style.css";
const Navbar = () => {
    let Links =[
      {name:"Accueil",link:"/"},
      
      {name:"Employeur",link:"Logine"},
      {name:"Candidat",link:"Loginc"},
      {name:"Faq",link:"Faqs"},
      {name:"Contact",link:"Contact"},
    ];
    let [open,setOpen]=useState(false);
  return (
    
    <div className='shadow-md w-full  left-0 '>
    <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-gray-800' style={{
      backgroundColor: '3f51b5'}}>
      <span className='text-3xl text-indigo-600 mr-1 pt-2'>  
      </span>
JOBLIGNE
    </div>
    
    <div onClick={()=>setOpen(!open)} className='text-3xl ttr absolute right-8 top-6 cursor-pointer md:hidden'>
    <ion-icon name={open ? 'close':'menu'}></ion-icon>
    </div>

    <ul className={`md:flex  md:items-center  md:pb-0 pb-12 ttr absolute md:static bg-white md:z-auto z-[100000000000] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
      {
        Links.map((link)=>(
          <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
            <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
          </li>
        ))
      }
      <a className='btn btn-primary m-2' href='/huser'>
      <i class="fa fa-user"></i> Espace Admin    
      </a>
    </ul>
    </div>
  </div>
    
  )
}

export default Navbar
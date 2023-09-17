import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Logine from './components/Logine'
import Loginc from './components/Loginc'
import Logina from './components/Logina'
import Contact from './components/Contact'
import Searchres from './components/Searchres'
import Offrem from './components/Offrem'
import ListCandidatures from './components/ListCandidatures'
import Userreply from './components/Userreply'
import Offrelist from './components/Offrelist'
import Registerc from './components/Registerc'
import Registere from './components/Registere'

import Faqs from './components/Faqs'
import Dashb from './components/Dashb'
import Home from './components/Home'
import Alloffres from './components/Alloffres'
import Article from './components/Article'

const App = () => {  
  
  return [
    <BrowserRouter>
    <Routes> 
    <Route index element={<Home/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Loginc' element={<Loginc/>}/>
    <Route path='/Logine' element={<Logine/>}/>
    <Route path='/Searchres' element={<Searchres/>}/>
    <Route path='/Offrem' element={<Offrem/>}/>
    <Route path='/Alloffres' element={<Alloffres/>}/>
    <Route path='/Article' element={<Article/>}/>
    <Route path='/Userreply' element={<Userreply/>}/>
    <Route path='/Offrelist' element={<Offrelist/>}/>
    <Route path='/Faqs' element={<Faqs/>}/>
    <Route path='/Dashb' element={<Dashb/>}/>
    <Route path='/Huser' element={<Logina/>}/>
    <Route path='/ListCandidatures' element={<ListCandidatures/>}/>
    <Route path='/Registerc' element={<Registerc/>}/>
    <Route path='/Registere' element={<Registere/>}/>
        </Routes>
    </BrowserRouter>
    
      
    ]
}

export default App
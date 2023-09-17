import Navbar from './Navbar'
import Section3 from './Section3'
import Section1 from './Section1'
import Section2 from './Section2'
import Section4 from './Section4'
import Header from './Header'





function Home(){  
 
    
  return [
   
    <Navbar/>
      ,
      <Header/>
      ,
      <Section4/>
      ,
      <Section1/>
      ,
      <Section2/>
      ,
      <Section3/>
      
    ]
   
}

export default Home;
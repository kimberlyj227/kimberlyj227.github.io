import React from "react";
import "./styles/App.css";
import Jumbo from "./components/Jumbo";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";





function App() {
  return (
 

      <>
       
       <header>
          <Jumbo/>
        </header>
        <div>
   
          <About/>
    
          <Portfolio/>

          <Contact />
          
        </div>  
        <footer>
          <Footer/> 

        </footer>

      </>  
   
          
  




  );
}

export default App;

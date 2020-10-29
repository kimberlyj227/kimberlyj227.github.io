import React from "react";
import "./styles/App.css";
import Jumbo from "./components/Jumbo";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";

function App() {
  return (
 

      <>
       
       <header>
          <Jumbo/>
        </header>
        <div>
   
          <About/>
          {/* <Gallery /> */}
          <Portfolio/>
          
        </div>  
        <footer>
          <Footer/> 

        </footer>

      </>  
   
          
  




  );
}

export default App;

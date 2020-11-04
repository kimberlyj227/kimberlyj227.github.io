import React from "react";

import Jumbo from "./components/Jumbo";
import Menu from "./components/Menu";
import What from "./components/WhatICanDo";
// import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Examples from "./components/Examples";
import { Wrapper } from "./styles";

function App() {
  return (
 

      <>
       
       <header>
        <Menu/>
          <Jumbo/>
        </header>
        <div>
          <What />
          <Examples />
   
          {/* <About/> */}
          {/* <Gallery /> */}
          {/* <Portfolio/> */}
          
        </div>  
        <footer>
          <Footer/> 

        </footer>

      </>  
   
          
  




  );
}

export default App;

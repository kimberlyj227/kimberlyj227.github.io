import React from "react";

import Jumbo from "./components/Jumbo";
import Menu from "./components/Menu";
import What from "./components/WhatICanDo";
// import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Connect from "./components/Connect";
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
          <Connect />
   
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

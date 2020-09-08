import React from "react";
import "./styles/App.css";
import Container from 'react-bootstrap/Container'
import Jumbo from "./components/Jumbo";
import About from "./components/About";
import Rectangle from "./components/Rectangle";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Landing from "./components/Landing";




function App() {
  return (
 

      <>
        <Landing />
        <About/>
        <Portfolio/>
        <Contact />

      </>  
   
        // {/* <header>
        //   <Jumbo/>
        // </header>
        // <div>
        //   <Rectangle side={"rectangle-left"}/>
        //   <About/>
        //   <Rectangle side={"rectangle-right"}/>
        //   <Portfolio/>
        //   <Rectangle side={"rectangle-left"}/>
        //   <Contact />
        //   <Rectangle side={"rectangle-right"} />
        //   <Footer/> 
        // </div>  */}
          
  




  );
}

export default App;

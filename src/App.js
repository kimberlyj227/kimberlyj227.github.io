import React from "react";
import "./styles/App.css";
import Container from 'react-bootstrap/Container'
import Jumbo from "./components/Jumbo";
import About from "./components/About";
import Rectangle from "./components/Rectangle";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";




function App() {
  return (
    <Container fluid>
      <header>
        <Jumbo/>
      </header>
      <div>
        <Rectangle side={"rectangle-left"}/>
        <About/>
        <Rectangle side={"rectangle-right"}/>
        <Portfolio/>
        <Rectangle side={"rectangle-left"}/>
        <Footer/>
       
      </div>
        
    </Container>



  );
}

export default App;

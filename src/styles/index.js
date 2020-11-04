import styled from "styled-components";
import {Jumbotron, Container, Image } from "react-bootstrap";

const yellow = "#d79d1f";
const grey = "#575757";
const lightGrey = "#e9e9e9";

export const Wrapper = styled(Container)`
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    margin: 0 ;
  }

  h1, h2 {
    color: "#fff";
  }


`

export const JumboWrapper = styled(Jumbotron)`
    background-image: url(${process.env.PUBLIC_URL}/img/HERO.png);
    background-size: cover;
    height: 710px;
    position: relative;
    margin-bottom: 0 !important;
  
`

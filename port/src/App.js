import React from "react";
import "./App.css";
import { Container, Grid } from "@material-ui/core";
import Header from "./comp/Header.js";
import Body from "./comp/Body.js";
import { Link, Element } from "react-scroll";

function App() {
  return (
    <Container maxWidth="100%" style={{padding:0}}>
      
        <Header />
        <Body /> 
        
      
    </Container>
  );
}



export default App;

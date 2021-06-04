import React from "react";
import "./App.css";
import { Container, Grid } from "@material-ui/core";
import Header from "./comp/Header.js";
import Body from "./comp/Body.js";
import { Link, Element } from "react-scroll";

function App() {
  return (
    <Container maxWidth="xl">
      <Grid>
        <Header />
        <Body />
        
      </Grid>
    </Container>
  );
}



export default App;

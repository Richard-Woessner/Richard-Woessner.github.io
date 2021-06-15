import React from "react";
import "./App.css";
import { Container, Grid } from "@material-ui/core";
import Header from "./comp/Header.js";
import Body from "./comp/Body.js";
import { Link, Element } from "react-scroll";
import { FullPage, Slide } from "react-full-page";

function App() {
  return (
    <div>
        <Header />
        <Body /> 
    </div>
  );
}



export default App;

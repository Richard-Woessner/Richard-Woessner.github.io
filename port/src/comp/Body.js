import React, { Fragment } from "react";
import { AppBar, Toolbar, Box, Paper, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { sizing } from "@material-ui/system";
import Aboutme from "./pages/AboutMe.js";
import Contact from "./pages/Contact.js";
import Work from "./pages/Work.js";
import Landing from "./pages/Landing.js";
import Interests from "./pages/Interests.js";
import { FullPage, Slide } from "react-full-page";

class Body extends React.Component {

  render() {
    return (
      <FullPage>
        <Slide>
          <Landing />
        </Slide>
        <Slide>
          <Aboutme />
        </Slide>
        <Slide>
          <Work />
        </Slide>
        <Slide>
          <Interests />
        </Slide>
      </FullPage>
    );
  }
}
export default Body;

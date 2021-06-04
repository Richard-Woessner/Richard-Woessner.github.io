import React, { Fragment } from "react";
import { AppBar, Toolbar, Box, Paper } from "@material-ui/core";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { sizing } from '@material-ui/system';
import  Aboutme from "./pages/AboutMe.js";
import  Contact from "./pages/Contact.js";
import  Work from "./pages/Work.js";
import  Interests from "./pages/Interests.js";


class Body extends React.Component {
  render() {
    return (
      <div>
        <Aboutme />
        <Work />
      </div>
    );
  }
}
export default Body;

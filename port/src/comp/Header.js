import React from 'react';
import { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { AppBar, Toolbar } from "@material-ui/core";


class Header extends React.Component {
      render() {
        return(
            <AppBar position="static">
                  <Toolbar></Toolbar>
            </AppBar>
        );
      }
    }

export default Header;
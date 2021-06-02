import React, { Fragment } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { Container, Grid } from "@material-ui/core";
import Header from "./comp/Header.js";

function App() {
  return (
    <Container maxWidth="xl">
      <Grid>
        <Header />
      <Router>
        <main>
        <Button variant="contained" color="primary"> Hello World</Button>
          <nav>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          </nav>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about/"  component={About} />
            <Route path="/contact"  component={Contact} />
        </Switch>
      </main>
    </Router>
    </Grid>
  </Container>
  );
}

const Home = () => (
  <Fragment>
    <h1>Home</h1>

  </Fragment>
);

  const About = () => (
    <Fragment>
      <h1>About</h1>

    </Fragment>
  );
  
  const Contact = () => (
    <Fragment>
      <h1>Contact</h1>

    </Fragment>
  );

export default App;

import React from "react";
import { FullPage, Slide } from "react-full-page";
import { Link } from "react-scroll";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";
import { AppBar, Toolbar, Button, Grid } from "@material-ui/core";
import { spacing } from "@material-ui/system";

class Header extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar variant="dense">
            <Grid
              container
              alignItems="center"
              direction="row"
              justify="space-between"
            >
              <div>
                <IconButton
                  aria-label="Linkedin.com"
                  onClick={() =>
                    window.open("https://www.linkedin.com/in/richard-woessner/")
                  }
                >
                  <LinkedInIcon color="action" />
                </IconButton>

                <IconButton
                  aria-label="GitHub.com"
                  onClick={() =>
                    window.open("https://github.com/Richard-Woessner")
                  }
                >
                  <GitHubIcon color="action" />
                </IconButton>
              </div>
              <h3>Richard Woessner III</h3>

              <div>
                <Link to="about" spy={true} smooth={true} offset={-100}>
                  <Button color="inherit">About-Me</Button>
                </Link>
                <Link to="work" spy={true} smooth={true} offset={-55}>
                  <Button color="inherit">My-Work</Button>
                </Link>
                <Link to="interests" spy={true} smooth={true} offset={-55}>
                  <Button color="inherit">Interests</Button>
                </Link>
                <Link to="contact" spy={true} smooth={true}>
                  <Button color="inherit">Contact-Me</Button>
                </Link>
              </div>
            </Grid>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </div>
    );
  }
}

export default Header;

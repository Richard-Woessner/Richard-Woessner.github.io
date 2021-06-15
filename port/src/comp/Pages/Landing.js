import React from "react";
import Sky from "react-sky";
import { Grid, Card, Box, Typography } from "@material-ui/core";

class Landing extends React.Component {
  render() {
    return (
      <Box height={"100%"}>
        <Sky
          images={{
            /* FORMAT AS FOLLOWS */
            0: "https://image.flaticon.com/icons/png/512/2867/2867522.png" /* You can pass as many images as you want */,
            1: "https://image.flaticon.com/icons/png/128/900/900111.png",
            /* 4: your other image... */
            /* 5: your other image... */
            /* ... */
          }}
          how={
            15
          } /* Pass the number of images Sky will render chosing randomly */
          time={100} /* time of animation */
          size={"100px"} /* size of the rendered images */
          background={"palettedvioletred"} /* color of background */
        />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ height: "100%" }}
        >
          <Grid item xs={6}>
            <Card>
              <Box m={4} mx="auto">
                <Typography
                  align="center"
                  variant="h2"
                  style={{ fontFamily: "Roboto" }}
                >
                  Hello, my name is Richard.
                </Typography>
                <Typography
                  align="center"
                  variant="h3"
                  style={{ fontFamily: "Roboto" }}
                >
                  Welcome to my website
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
export default Landing;

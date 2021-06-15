import React from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";
import imageUrl from "../../../src/comp/img/oldSite2.png";
import newSite from "../../../src/comp/img/newSite.png";

class Work extends React.Component {
  render() {
    return (
      <Box
        height={"100%"}
        p={2}
        border={1}
        id="work"
        style={{ backgroundColor: "yellow" }}
      >
        <Grid
          container
          spacing={3}
          justify="center"
          style={{ height: "100%" }}
        >
          <Grid item md={5}>
            <Card >
              <CardContent>
                <CardMedia component="img" image={imageUrl}  />

                <Typography variant="h4">How it started</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={5}>
          <Card style={{maxHeight:"20vm"}}>
              <CardContent>
                <CardMedia component="img" image={newSite} />

                <Typography variant="h4">How its Going</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={11}>
            <Card>
              d
            </Card>
          </Grid>
          <Grid item md={11}>
            <Card>
              d
            </Card>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
export default Work;

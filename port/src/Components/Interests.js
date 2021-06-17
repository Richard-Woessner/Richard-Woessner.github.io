import React, { Component } from "react";
import { TabLink, Tabs, TabContent } from "react-tabs-redux";
import {
  Grid,
  Paper,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { sizing } from "@material-ui/system";

class Interests extends Component {
  

  interest1 = (
    <span>
      <CardContent p={2}>
        <Grid container direction="row" spacing={1}>
          <Grid item xs={12} sm={4}>
            <CardMedia
              component="img"
              image={"./images/starlink.png"}
              title="Live from space album cover" 
            />
          </Grid>
          <Grid item>
            <Typography variant="h5">sdf</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </span>
  );

  render() {
    if(this.props.data){
    const interests = this.props.data.interests;
    console.log(interests);
    var output = interests.map((interests, index) => (
      <TabContent for={"tab"+index}>
      <span>
      <CardContent p={2}>
        <Grid container direction="row" spacing={1}>
          <Grid item xs={4} sm={4}>
            <CardMedia
              component="img"
              image={"./images/"+interests.picture}
            />
          </Grid>
          <Grid item xs={8} sm={8}>
            <Typography variant="p">
              {interests.text}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </span>
    </TabContent>
    ))
  
    var tabs = interests.map((interests, index) => (
      <Grid item xs={4} sm={12}>
      <TabLink style={{ width: "100%" }} to={"tab"+index}>
          {interests.title}
       </TabLink>
       </Grid>
    ))

  }

    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <Tabs selectedTab="tab0">
              <Grid container direction="row">
                <Grid item xs={12} sm={3}>
                  <Grid container justify="space-between" direction="row" spacing={1}>

                      {tabs}
                    
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={9}>
                  <Box height="100%">
                    <Card style={{ height: "100%", backgroundColor:"#444", color:"white" }}>
                      {output}
                    </Card>
                  </Box>
                </Grid>
              </Grid>
            </Tabs>

            <div className="ten columns flex-container"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Interests;

import React, { Component } from "react";
import { TabLink, Tabs, TabContent, Typography } from "react-tabs-redux";
import {Grid, Paper, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { sizing } from '@material-ui/system';

class Testimonials extends Component {
   interest1 = (
      <Box p={2}>
         sdf
      </Box>
    );
    

  render() {
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <Tabs>
              <Grid container direction="row" spacing={1}>
                 <Grid item xs={12} sm={3}>
                 <Grid container direction="row" spacing={1}>
                  <Grid item xs={4} sm={12}>
                    <TabLink style={{width:"100%"}} to="tab1">StarLink</TabLink> 
                  </Grid>
                  <Grid item xs={4} sm={12}>
                    <TabLink style={{width:"100%"}} to="tab2">Car AutoPilot</TabLink>
                  </Grid>
                  <Grid item xs={4} sm={12}>
                    <TabLink style={{width:"100%"}} to="tab3">Sports</TabLink>
                  </Grid>
                  </Grid>
                
               </Grid>

                <Grid item xs={12} sm={9}>
                <Box height="100%">
                <Paper style={{height:"100%"}}>
                   
                  
                     
                     <TabContent for="tab1">
                        {this.interest1}
                     </TabContent>
                     <TabContent for="tab2">.sdf..</TabContent>
                     <TabContent for="tab3">sdf...</TabContent>
                     
                     
                  </Paper>
                  </Box>
                  
                </Grid>
              </Grid>
            </Tabs>

            <div className="ten columns flex-container">
              
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;

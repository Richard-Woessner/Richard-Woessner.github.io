import React, { Fragment } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Card,
  Grid,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper
} from "@material-ui/core";
import { sizing, border } from "@material-ui/system";
import imageUrl from "../../../src/pic.jpg";
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

class Aboutme extends React.Component {
  render() {
    return (
      <Box border={1} minHeight={"100%"} p={2}  id="about">
          <Grid 
            container
            spacing={4}
            direction="row"
            justify="space-between"
            alignItems="center"
            
          >
            <Grid item md={3}>
              <Card>
                <CardContent>
                  <CardHeader title="Richard Woessner" />
                  <CardMedia
                    image={imageUrl}
                    component="img"
                    title="Contemplative Reptile"
                  />
                    <List>
                        <ListItem>
                          <ListItemIcon>
                            <EmailIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary="Woessnrw@mail.uc.edu"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <PhoneAndroidIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary="(440)-488-1715"
                          />
                        </ListItem>
                    </List>
                </CardContent>
              </Card>
            </Grid>

            <Grid item md={9}>
              <Card style={{ height: "100%"}}>
                <CardContent> 

                        <Box p={2}>
                            <Typography variant="h4">
                                Hello, my name is Richard Woessner, I am a senior here at the university of Cincinnati and I come from the small city of Painesville OH. I have been into development for my entire life, beginning from my first blogs on AOL. During High School, I was lucky enough to get an offer to go to Auburn Career Center, where I could further my understanding and application of Web Development. Here is where I learned about the basics of web development, like HTML, CSS, JS, and PHP. This led me to truly understand that this is what I wanted to do for a living, solving problems with my skills in technology so I went to the University of Cincinnati where I am now and will soon be leaving to move on to my next adventure.                            
                            </Typography>
                        </Box>

                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

    );
  }
}
export default Aboutme;

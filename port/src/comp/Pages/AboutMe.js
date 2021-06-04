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
  ListItemIcon
} from "@material-ui/core";
import { sizing, border } from "@material-ui/system";
import imageUrl from "../../../src/pic.jpg";
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

class Aboutme extends React.Component {
  render() {
    return (
      <Box height="95vh" border={1} id="about">
        <Box height="100%">
          <Grid
            container
            spacing={3}
            style={{ height: "100%", padding: "1vh" }}
          >
            <Grid item xs={3}>
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
            <Grid item xs={9} justify="flex-end">
              <Card color style={{ height: "100%" }}>
                one
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }
}
export default Aboutme;

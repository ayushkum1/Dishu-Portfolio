import React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  main: {
    color: "white",
  },
  fontsize: {
    fontSize: "1.5em",
    color: "yellow",
    marginTop: "2px",
    marginLeft: "15px",
    marginBottom: "2px",
    fontWeight: "700",
  },
}));

export default function PersonalInfo() {
  const styles = useStyles();

  return (
    <Grid container className={styles.main}>
      <Grid container>
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <p className={styles.fontsize}>PERSONAL INFORMATIONS</p>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={5} md={5} lg={5} xl={5}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button>
              <ListItemText primary="First Name: Vikrant" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Last Name: Singh" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Age: 25 Years" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Nationality: Indian" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Freelance: Available" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={7} md={7} lg={7} xl={7}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button>
              <ListItemText primary="Address: Greater Noida" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Phone: 8892434926" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Email: vikrantsingh@gmail.com" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Instagram: vik@ig.com" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Languages: Hindi, English" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
}

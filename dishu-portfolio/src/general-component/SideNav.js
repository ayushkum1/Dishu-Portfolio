import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import BusinessCenterOutlinedIcon from "@material-ui/icons/BusinessCenterOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";

const useStyle = makeStyles((theme) => ({
  iconStyle: {
    background: "yellow",
    borderRadius: "50%",
    height: "1.7em",
    width: "1.7em",
    fill: "black !important",
    padding: "6px",
  },
  iconPositionStyle: {
    display: "flex",
    justifyContent: "center",
  },
  navPositionStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function SideNav(prop) {
  const styles = useStyle();
  console.log(prop);
  console.log(prop.prop);
  return (
    <Grid container style={{ position: "fixed", width: "fit-content" }}>
      <Grid item xs={12} lg={12} xl={12} className={styles.navPositionStyle}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem
            button
            className={styles.iconPositionStyle}
            onClick={() => {
              prop.prop.history.push("/");
            }}
          >
            <ListItemIcon>
              <HomeOutlinedIcon className={styles.iconStyle} />
            </ListItemIcon>
            {/* <ListItemText primary="Home" style={{ color: "white" }} /> figure out later, its working but should be on hover */}
          </ListItem>
          <ListItem
            button
            className={styles.iconPositionStyle}
            onClick={() => {
              prop.prop.history.push("/about");
            }}
          >
            <ListItemIcon>
              <PersonOutlineOutlinedIcon className={styles.iconStyle} />
            </ListItemIcon>
            {/* <ListItemText primary="Inbox" /> */}
          </ListItem>
          <ListItem
            button
            className={styles.iconPositionStyle}
            onClick={() => {
              prop.prop.history.push("/portfolio");
            }}
          >
            <ListItemIcon>
              <BusinessCenterOutlinedIcon className={styles.iconStyle} />
            </ListItemIcon>
            {/* <ListItemText primary="Inbox" /> BusinessCenterOutlinedIcon*/}
          </ListItem>
          <ListItem
            button
            className={styles.iconPositionStyle}
            onClick={() => {
              prop.prop.history.push("/contact");
            }}
          >
            <ListItemIcon>
              <MailOutlineOutlinedIcon className={styles.iconStyle} />
            </ListItemIcon>
            {/* <ListItemText primary="Inbox" /> BusinessCenterOutlinedIcon*/}
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}

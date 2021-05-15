import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import BusinessCenterOutlinedIcon from "@material-ui/icons/BusinessCenterOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import ForumOutlinedIcon from "@material-ui/icons/ForumOutlined";
import { withRouter } from "react-router-dom";
import SideNav from "../general-component/SideNav";

const useStyle = makeStyles((theme) => ({
  main: {
    background: "black",
    height: "100vh",
  },
  profileimage: {
    height: "90%",
    width: "90%",
    margin: "2em",
    display: "flex",
    justifyContent: "center",
    borderRadius: "2em",
    position: "relative",
  },
  contentpaper: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    width: "80%",
    background: "black",
    border: "yellow",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "2em",
  },
  contentTextHeader: {
    color: "yellow",
    fontSize: "30px",
    fontWeight: "800",
    padding: "1px",
    marginTop: "0.7em",
    marginBottom: "1px",
    textAlign: "center",
  },
  contentTextProfile: {
    color: "white",
    fontSize: "30px",
    textAlign: "center",
    padding: "1px",
    marginTop: "1px",
  },
  contentTextAbout: {
    color: "white",
    fontSize: "20px",
    textAlign: "justify",
    padding: "0.8em",
    marginLeft: "1em",
    marginRight: "1em",
  },
  buttonPara: {
    background: "yellow",
    borderRadius: "2em",
    marginBottom: "0.8em",
    fontSize: "18px",
    padding: "1px 10px 1px 10px",
    float: "left",
    marginLeft: "2em",
    fontWeight: "700",
    fontFamily: "Montserrat !important",
  },
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

function Home(props) {
  const styles = useStyle();

  useEffect(() => {
    document.title = "Vikrant Singh";
  }, []);

  console.log(props);
  return (
    <Grid container className={styles.main}>
      <Grid item xs={1} md={1} lg={1} xl={1}></Grid>
      <Grid item xs={12} lg={4} xl={4} style={{ height: "100%" }}>
        <img
          src="https://i.postimg.cc/8cKwcpyC/IMG-20200109-WA0009.jpg"
          className={styles.profileimage}
        />
      </Grid>
      <Grid item xs={12} lg={6} xl={6} className={styles.contentpaper}>
        <Paper elevation={3} className={styles.paper}>
          <h1 className={styles.contentTextHeader}>
            - HELLO, I AM VIKRANT SINGH.
          </h1>
          <h2 className={styles.contentTextProfile}>FASHION DESIGNER</h2>
          <p className={styles.contentTextAbout}>
            I am a fresh graduate from Masters in Fashion Designing. I have
            strong skillset and academic background. Please do check out my
            projects and work!!
          </p>
          <Button variant="contained" className={styles.buttonPara}>
            MORE ABOUT ME &nbsp;&nbsp;
            <span>
              <strong>&#8594;</strong>
            </span>
            {/* check for the icon, should be more bold */}
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={1} lg={1} xl={1} className={styles.navPositionStyle}>
        <SideNav prop={props} />
      </Grid>
    </Grid>
  );
}

export default withRouter(Home);

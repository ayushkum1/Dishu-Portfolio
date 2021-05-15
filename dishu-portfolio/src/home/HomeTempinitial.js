import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

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
    fontFamily: "Montserrat",
    fontSize: "2.5em",
    padding: "1px",
    marginTop: "0.7em",
    marginBottom: "1px",
  },
  contentTextProfile: {
    color: "white",
    fontFamily: "Montserrat",
    fontSize: "2.5em",
    textAlign: "end",
    marginRight: "2em",
    padding: "1px",
    marginTop: "1px",
  },
  contentTextAbout: {
    color: "white",
    fontFamily: "Montserrat",
    fontSize: "1.5em",
    textAlign: "start",
    marginLeft: "3em",
    marginRight: "2em",
  },
  buttonPara: {
    height: "2em",
    width: "50%",
    background: "yellow",
    borderRadius: "2em",
    marginLeft: "2em",
    fontFamily: "Montserrat",
    fontSize: "2em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function HomeTempinitial() {
  const styles = useStyle();

  return (
    <div className={styles.main}>
      <Grid container className={styles.main}>
        <Grid item xs={5} lg={5} xl={5}>
          <img
            src="https://i.postimg.cc/8cKwcpyC/IMG-20200109-WA0009.jpg"
            className={styles.profileimage}
          />
        </Grid>
        <Grid item xs={6} lg={6} xl={6} className={styles.contentpaper}>
          <Paper elevation={3} className={styles.paper}>
            <h1 className={styles.contentTextHeader}>
              {" "}
              - HELLO, I AM VIKRANT SINGH.
            </h1>
            <h2 className={styles.contentTextProfile}>FASHION DESIGNER</h2>
            <p className={styles.contentTextAbout}>
              I am a fresh graduate from Masters in Fashion Designing. I have
              strong skillset and academic background. Please do check out my
              projects and works!!
            </p>
            <p className={styles.buttonPara}>
              MORE ABOUT ME &nbsp;&nbsp;&nbsp;&nbsp;<span> &#8594;</span>
            </p>
          </Paper>
        </Grid>
        <Grid item xs={1} lg={1} xl={1}>
          <p>Hello2</p>
        </Grid>
      </Grid>
    </div>
  );
}
//
{
  /* <img
src="https://image.shutterstock.com/image-vector/arrow-points-right-icon-260nw-523831819.jpg"
style={{ height: "40px" }}
/> */
}

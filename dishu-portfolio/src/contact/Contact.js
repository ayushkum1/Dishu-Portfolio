import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import SideNav from "../general-component/SideNav";
import BackgroundHeader from "../general-component/BackgroundHeader";
import DraftsIcon from "@material-ui/icons/Drafts";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

// const customStyle = makeStyles((theme) =>
//   createStyles({
//     root: {
//       color: "yellow",
//       "&.Mui-focused": {
//         border: "2px solid orange",
//         "& .MuiOutlinedInput-notchedOutline": {
//           border: "none",
//         },
//       },
//     },
//   })
// );

const useStyle = makeStyles((theme) => ({
  main: {
    background: "black",
    height: "100%",
  },
  navPositionStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  contactText: {
    fontSize: "1.6em",
    color: "white",
    fontWeight: "600",
    margin: "0px",
  },
  contactContentText: {
    fontSize: "1em",
    color: "white",
    fontWeight: "100",
    paddingRight: "40px",
    textAlign: "justify",
  },
  contactEmailText: {
    fontSize: "0.9em",
    color: "white",
    fontWeight: "100",
  },
  iconStyle: {
    fill: "yellow",
  },
  iconGrid: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },
  socialIconGrid: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },
  socialMediaIcon: {
    fill: "yellow",
    background: "#212121",
    borderRadius: "2em",
    padding: "5px",
    fontSize: "50px",
  },
  nameInputStyle: {
    background: "#212121",
    height: "fit-content",
    padding: "15px",
    borderRadius: "2em",
    fontSize: "1em",
    color: "white",
    width: "98%",
    border: "none",
    marginTop: "5px",
  },
  buttonPara: {
    background: "yellow",
    borderRadius: "2em",
    marginTop: "1em",
    fontSize: "18px",
    padding: "1px 10px 1px 20px",
    float: "left",
    fontFamily: "Montserrat !important",
    fontWeight: "600",
  },
}));

export default function Contact(props) {
  const styles = useStyle();
  // let borderColor = "none";
  // const inputOnFocus = () => {
  //   borderColor = "yellow";
  // };
  // const inputStyle = customStyle();
  return (
    <Grid container className={styles.main}>
      <Grid item xs={12} md={12} lg={12} xl={12}>
        <Grid container>
          <Grid item xs={11} md={11} lg={11} xl={11}>
            <Grid container style={{ marginBottom: "20px" }}>
              <Grid item xs={12} md={12} lg={12} xl={12}>
                <BackgroundHeader
                  background="CONTACT"
                  whitetitle="GET IN "
                  yellowtitle="TOUCH"
                />
              </Grid>
              <Grid item xs={1} md={1} lg={1} xl={1}></Grid>
              <Grid item xs={11} md={11} lg={11} xl={11}>
                <Grid container>
                  <Grid item xs={12} md={4} lg={4} xl={4}>
                    <Grid container style={{ marginBottom: "30px" }}>
                      <Grid item xs={12} md={12} lg={12} xl={12}>
                        <div>
                          <p className={styles.contactText}>DON'T BE SHY!</p>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={12} lg={12} xl={12}>
                        <div>
                          <p className={styles.contactContentText}>
                            Feel free to get in touch with me. I am always open
                            to discussing new projects, creative ideas or
                            opportunities to be part of your visions.
                          </p>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={1}
                        md={1}
                        lg={1}
                        xl={1}
                        className={styles.iconGrid}
                      >
                        <div>
                          <DraftsIcon
                            className={styles.iconStyle}
                            fontSize="large"
                          />
                        </div>
                      </Grid>
                      <Grid item xs={11} md={11} lg={11} xl={11}>
                        <div>
                          <p
                            className={styles.contactEmailText}
                            style={{ marginLeft: "17px" }}
                          >
                            MAIL ME <br />
                            <strong>vikrant@gmail.com</strong>
                          </p>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={1}
                        md={1}
                        lg={1}
                        xl={1}
                        className={styles.iconGrid}
                      >
                        <div>
                          <PhoneIcon
                            className={styles.iconStyle}
                            fontSize="large"
                          />
                        </div>
                      </Grid>
                      <Grid item xs={11} md={11} lg={11} xl={11}>
                        <div>
                          <p
                            className={styles.contactEmailText}
                            style={{ marginLeft: "17px" }}
                          >
                            CALL ME <br />
                            <strong>+91-8892434926</strong>
                          </p>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={12} lg={12} xl={12}>
                        <Grid container>
                          <Grid
                            item
                            xs={3}
                            md={3}
                            lg={3}
                            xl={3}
                            className={styles.socialIconGrid}
                          >
                            <InstagramIcon
                              className={styles.socialMediaIcon}
                              style={{}}
                            />
                          </Grid>
                          <Grid
                            item
                            xs={3}
                            md={3}
                            lg={3}
                            xl={3}
                            className={styles.socialIconGrid}
                          >
                            <FacebookIcon
                              className={styles.socialMediaIcon}
                              fontSize="large"
                            />
                          </Grid>
                          <Grid
                            item
                            xs={3}
                            md={3}
                            lg={3}
                            xl={3}
                            className={styles.socialIconGrid}
                          >
                            <LinkedInIcon
                              className={styles.socialMediaIcon}
                              fontSize="large"
                            />
                          </Grid>
                          <Grid
                            item
                            xs={3}
                            md={3}
                            lg={3}
                            xl={3}
                            className={styles.socialIconGrid}
                          >
                            <TwitterIcon
                              className={styles.socialMediaIcon}
                              fontSize="large"
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={8} lg={8} xl={8}>
                    <Grid container>
                      <Grid item xs={12} md={4} lg={4} xl={4}>
                        <input
                          type="text"
                          placeholder="FIRST NAME"
                          className={styles.nameInputStyle}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={4} lg={4} xl={4}>
                        <input
                          type="text"
                          placeholder="YOUR EMAIL"
                          className={styles.nameInputStyle}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={4} lg={4} xl={4}>
                        <input
                          type="text"
                          placeholder="SUBJECT"
                          className={styles.nameInputStyle}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={12} lg={12} xl={12}>
                        <textarea
                          type="text"
                          placeholder="YOUR MESSAGE"
                          className={styles.nameInputStyle}
                          rows="8"
                          required
                          style={{
                            width: "98%",
                            marginTop: "30px",
                            fontSize: "1.4em",
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} md={12} lg={12} xl={12}>
                        <Button
                          variant="contained"
                          className={styles.buttonPara}
                        >
                          SEND MESSAGE &nbsp;&nbsp;
                          <span
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <SendIcon />
                          </span>
                          {/* check for the icon, should be more bold */}
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={1}
            md={1}
            lg={1}
            xl={1}
            className={styles.navPositionStyle}
          >
            <SideNav prop={props} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

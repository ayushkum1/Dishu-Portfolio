import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import SideNav from "../general-component/SideNav";
import PersonalInfo from "../general-component/PersonalInfo";
import StatBox from "../general-component/StatBox";
import SkillProgress from "../general-component/SkillProgress";
import EducationCard from "../general-component/EducationCard";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import BackgroundHeader from "../general-component/BackgroundHeader";

const useStyle = makeStyles((theme) => ({
  main: {
    background: "#111111", //this will be background for all
    height: "auto",
    // add justify content maybe
  },
  navPositionStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: "3em",
    color: "lightgrey",
    textAlign: "center",
    height: "4em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "800",
  },
  headerBackgroundText: {
    fontSize: "6em",
    width: "91%",
    color: "rgb(250, 250, 250, 0.1)",
    textAlign: "center",
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  personalInfoStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  statBox: {
    border: "0.1em solid #404040",
    borderRadius: "10px",
    padding: "10px",
    margin: "15px",
  },
  horizontalLine: {
    height: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  sectionTitle: {
    color: "white",
    fontWeight: "600",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "1px",
    paddingBottom: "1px",
  },
}));

export default function About(props) {
  console.log("after");
  console.log(props);
  const styles = useStyle();

  const [statData, setstatData] = useState([
    {
      number: "12",
      name: "YEARS OF EXPERIENCE",
    },
    {
      number: "97",
      name: "COMPLETED PROJECTS",
    },
    {
      number: "81",
      name: "HAPPY CUSTOMERS",
    },
    {
      number: "53",
      name: "AWARDS WON",
    },
  ]);

  const [skillContent, setskillContent] = useState([
    {
      perc: "50",
      skillTitle: "Photography",
    },
    {
      perc: "80",
      skillTitle: "Logo Designing",
    },
    {
      perc: "100",
      skillTitle: "Photoshop",
    },
    {
      perc: "90",
      skillTitle: "Portfolio Making",
    },
    {
      perc: "80",
      skillTitle: "Designing",
    },
    {
      perc: "70",
      skillTitle: "Stitching",
    },
  ]);

  const [educationDetails, seteducationDetails] = useState([
    {
      years: "2019-PRESENT",
      title: "Masters in Fashion Designing",
      about:
        "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
      icon: SchoolOutlinedIcon,
    },
    {
      years: "2016-2019",
      title: "Freelancer",
      about:
        "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
      icon: WorkOutlineOutlinedIcon,
    },
    {
      years: "2013-2016",
      title: "Bachelor of Commerce",
      about:
        "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
      icon: SchoolOutlinedIcon,
    },
    {
      years: "2012-2013",
      title: "Senior Secondary School",
      about:
        "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
      icon: SchoolOutlinedIcon,
    },
    {
      years: "2010-2011",
      title: "Higher Secondary School",
      about:
        "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
      icon: SchoolOutlinedIcon,
    },
  ]);

  return (
    <Grid container className={styles.main}>
      <Grid item xs={11} md={11} lg={11} xl={11}>
        <Grid container>
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Grid container>
              <Grid item xs={11} md={11} lg={11} xl={11}>
                <BackgroundHeader
                  background="RESUME"
                  whitetitle="ABOUT"
                  yellowtitle="ME"
                />
                <Grid container>
                  <Grid item xs={2} md={2} lg={2} xl={2}></Grid>
                  <Grid item xs={10} md={10} lg={10} xl={10}>
                    <Grid container>
                      <Grid
                        item
                        xs={10}
                        md={10}
                        lg={6}
                        xl={6}
                        className={styles.personalInfoStyle}
                      >
                        <PersonalInfo />
                      </Grid>
                      {/* <Grid item xs={1} md={1} lg={1} xl={1}></Grid> */}
                      <Grid item xs={10} md={10} lg={6} xl={6}>
                        <Grid container>
                          {statData.map((obj, key) => (
                            <Grid
                              item
                              xs={8}
                              md={5}
                              lg={5}
                              xl={5}
                              className={styles.statBox}
                            >
                              <StatBox
                                statnumber={obj.number}
                                statname={obj.name}
                                className={styles.statBox}
                              />
                            </Grid>
                          ))}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container style={{ marginTop: "20px" }}>
                  <Grid item xs={1} md={1} lg={1} xl={1}></Grid>
                  <Grid item xs={11} md={11} lg={11} xl={11}>
                    <hr style={{ width: "40%", borderColor: "#404040" }}></hr>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Grid container className={styles.main}>
              <Grid item xs={1} md={1} lg={1} xl={1}></Grid>
              <Grid
                item
                xs={10}
                md={10}
                lg={10}
                xl={10}
                className={styles.sectionTitle}
              >
                <h1 style={{ marginTop: "1px", marginBottom: "1px" }}>
                  MY SKILLS
                </h1>
              </Grid>
              <Grid item xs={1} md={1} lg={1} xl={1}></Grid>
              <Grid item xs={2} md={2} lg={2} xl={2}></Grid>
              <Grid item xs={8} md={8} lg={8} xl={8}>
                {/* <div style={{ color: "white" }}>Helllow</div> */}
                <Grid container>
                  {skillContent.map((skills, key) => (
                    <Grid item xs={12} md={6} lg={4} xl={4}>
                      {/* xs could be 6 as well, 2 in a row looks fine btw */}
                      <SkillProgress
                        perc={skills.perc}
                        skillTitle={skills.skillTitle}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={2} md={2} lg={2} xl={2}></Grid>
              <Grid container style={{ marginTop: "4px" }}>
                <Grid item xs={1} md={1} lg={1} xl={1}></Grid>
                <Grid item xs={10} md={10} lg={10} xl={10}>
                  <hr style={{ width: "40%", borderColor: "#404040" }}></hr>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                lg={12}
                xl={12}
                className={styles.sectionTitle}
              >
                <h1 style={{ textAlign: "center" }}>
                  EDUCATION &amp; EXPERIENCE
                </h1>
              </Grid>
              <Grid item xs={2} md={2} lg={2} xl={2}></Grid>
              <Grid item xs={8} md={8} lg={8} xl={8}>
                <Grid container>
                  {educationDetails.map((det, key) => (
                    <Grid item xs={12} md={6} lg={6} xl={6}>
                      <EducationCard
                        years={det.years}
                        title={det.title}
                        about={det.about}
                        icon={det.icon}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={2} md={2} lg={2} xl={2}></Grid>
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
        style={{ height: "100vh" }}
      >
        <SideNav prop={props} />
      </Grid>
    </Grid>
  );
}

// To do:
// more thickness to about me

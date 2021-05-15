import React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const useStyle = makeStyles((theme) => ({
  progress: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "0.5em",
  },
  skillTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function SkillProgress({ perc, skillTitle }) {
  const sty = useStyle();

  return (
    <Grid container>
      <Grid item xs={12} md={12} lg={12} xl={12} className={sty.progress}>
        <CircularProgressbar
          value={perc}
          text={`${perc}%`}
          styles={{
            root: {
              height: "150px",
              width: "150px",
            },
            path: {
              stroke: "yellow",
            },
            trail: {
              stroke: "#404040",
            },
            text: {
              fill: "white",
              fontSize: "1.7em",
              fontWeight: "600",
            },
          }}
        />
      </Grid>
      <Grid item xs={12} md={12} lg={12} xl={12} className={sty.skillTitle}>
        <p style={{ color: "white" }}>{skillTitle}</p>
      </Grid>
    </Grid>
  );
}

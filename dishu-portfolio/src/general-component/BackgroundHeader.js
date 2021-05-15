import React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyle = makeStyles((theme) => ({
  headerText: {
    fontSize: "3em",
    color: "lightgrey",
    textAlign: "center",
    height: "5.5em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "800",
  },
  headerBackgroundText: {
    fontSize: "7em",
    width: "91%",
    color: "rgb(250, 250, 250, 0.1)",
    textAlign: "center",
    direction: "column",
    position: "absolute",
  },
}));

export default function BackgroundHeader({
  background,
  whitetitle,
  yellowtitle,
}) {
  const styles = useStyle();
  return (
    <Grid>
      <Grid item xs={12} md={12} lg={12} xl={12}>
        <h1
          className={styles.headerBackgroundText}
          style={{ margin: "0px", marginTop: "60px" }}
        >
          {background}
        </h1>
      </Grid>
      <Grid item xs={12} md={12} lg={12} xl={12}>
        <h1 className={styles.headerText} style={{ margin: "0px" }}>
          {whitetitle} &nbsp;
          <span style={{ color: "yellow" }}>{yellowtitle}</span>
        </h1>
      </Grid>
    </Grid>
  );
}
{
  /* <Grid item xs={11} md={11} lg={11} xl={11}>
                <h1 className={styles.headerBackgroundText}>RESUME</h1>
              </Grid>
              <Grid item xs={12} md={12} lg={12} xl={12}>
                <h1 className={styles.headerText}>
                  ABOUT &nbsp;<span style={{ color: "yellow" }}>ME</span>
                </h1>
              </Grid> */
}

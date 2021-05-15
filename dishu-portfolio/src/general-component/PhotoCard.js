import React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyle = makeStyles((theme) => ({
  photoStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
    marginBottom: "10px",
  },
}));

export default function PhotoCard({ logo }) {
  const styles = useStyle();
  return (
    <Grid container>
      <Grid item xs={12} md={12} lg={12} xl={12} className={styles.photoStyle}>
        <img
          src={logo}
          height="200px"
          width="350px"
          style={{
            borderRadius: "0.5em",
          }}
        ></img>
      </Grid>
    </Grid>
  );
}

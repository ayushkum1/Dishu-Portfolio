import React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";

const useStyle = makeStyles((theme) => ({
  name: {
    display: "flex",
    alignItems: "center",
    marginTop: "1px",
    marginBottom: "1px",
    color: "white",
    fontSize: "1em",
  },
  number: {
    fontSize: "3em",
    marginBottom: "1px",
    marginTop: "1px",
    color: "yellow",
  },
}));

export default function StatBox({ statnumber, statname }) {
  console.log("statnumber" + statnumber);
  console.log("statname" + statname);
  const styles = useStyle();
  return (
    <Grid container>
      <Grid item xs={12} md={12} lg={12} xl={12}>
        <h1 className={styles.number}>
          {statnumber}
          <sup>+</sup>
        </h1>
      </Grid>
      <Grid item xs={12} md={12} lg={12} xl={12}>
        <h3 className={styles.name}>
          <RemoveOutlinedIcon
            style={{
              fontSize: "50px",
            }}
          />{" "}
          {statname}
        </h3>
      </Grid>
    </Grid>
  );
}

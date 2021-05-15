import React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";

export default function EducationCard({ years, title, about, icon }) {
  return (
    <Grid container>
      <Grid item xs={12} md={12} lg={12} xl={12}>
        <Stepper
          activeStep={0}
          orientation="vertical"
          style={{ background: "#111111" }}
        >
          <Step>
            <StepLabel StepIconComponent={icon} style={{ color: "white" }}>
              <p
                style={{
                  color: "white",
                  marginBottom: "0px",
                  marginTop: "0px",
                  background: "#202020",
                  borderRadius: "2em",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  width: "fit-content",
                }}
              >
                {years}
              </p>
            </StepLabel>
            <StepContent>
              <p style={{ color: "white" }}>{title}</p>
              <p style={{ color: "white" }}>{about}</p>
            </StepContent>
          </Step>
          <Step></Step>
        </Stepper>
      </Grid>
    </Grid>
  );
}

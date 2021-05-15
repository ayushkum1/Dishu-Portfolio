import React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Button from "@material-ui/core/Button";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import Modal from "@material-ui/core/Modal";
import Gallery from "./Gallery";

const useStyle = makeStyles((theme) => ({
  photoStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
    marginBottom: "10px",
  },
  image: {
    borderRadius: "0.5em",
    border: "1px grey solid",
  },
  titlePara: {
    fontSize: "2em",
    fontWeight: "600",
    color: "yellow",
  },
  periodPara: {
    fontSize: "1.2em",
    fontWeight: "400",
    color: "yellow",
  },
  authorPara: {
    fontSize: "1.2em",
    fontWeight: "400",
    color: "yellow",
  },
  descriptionPara: {
    fontSize: "1em",
    fontWeight: "400",
    color: "white",
  },
  mainPhoto: {},
  buttonPara: {
    background: "yellow",
    borderRadius: "2em",
    marginTop: "1em",
    fontSize: "18px",
    padding: "1px 10px 1px 10px",
    float: "left",
    fontFamily: "Montserrat !important",
    fontWeight: "600",
  },
}));

export default function PortfolioAccordianView({
  logo,
  title,
  period,
  author,
  description,
  photos,
}) {
  const styles = useStyle();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container>
      <Grid item xs={2} md={2} lg={2} xl={2}></Grid>
      <Grid item xs={8} md={8} lg={8} xl={8} className={styles.photoStyle}>
        <Accordion
          style={{
            background: "black",
            border: "1px grey solid",
            borderRadius: "2em",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ArrowDropDownIcon style={{ fill: "yellow" }} fontSize="large" />
            }
            aria-label="Expand"
            aria-controls="additional-actions1-content"
            id="additional-actions1-header"
          >
            <Grid container>
              <Grid item xs={12} md={6} lg={4} xl={4}>
                <img
                  src={logo}
                  height="200px"
                  width="200px"
                  className={styles.image}
                ></img>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={8}
                xl={8}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                }}
              >
                <Grid container>
                  <Grid item xs={12} md={12} lg={12} xl={12}>
                    <Typography
                      color="textSecondary"
                      className={styles.titlePara}
                    >
                      {title}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12} lg={12} xl={12}>
                    <Typography
                      color="textSecondary"
                      className={styles.periodPara}
                    >
                      {period}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12} lg={12} xl={12}>
                    <Typography
                      color="textSecondary"
                      className={styles.authorPara}
                    >
                      {author}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              <Grid item xs={12} md={12} lg={12} xl={12}>
                <Typography
                  color="textSecondary"
                  className={styles.descriptionPara}
                >
                  {description}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                lg={12}
                xl={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  variant="contained"
                  className={styles.buttonPara}
                  onClick={handleOpen}
                >
                  Gallery &nbsp;&nbsp;
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <PhotoLibraryIcon />
                  </span>
                  {/* check for the icon, should be more bold */}
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                  style={{
                    background: "black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    width: "100%",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Grid container>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      lg={12}
                      xl={12}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        onClick={handleClose}
                        style={{
                          width: "800px",
                          display: "flex",
                          justifyContent: "flex-end",
                          cursor: "pointer",
                          margin: "1px",
                          padding: "2px",
                          fontSize: "1.5em",
                          color: "grey",
                        }}
                      >
                        x
                      </span>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} xl={12}>
                      <Gallery photos={photos} />
                    </Grid>
                  </Grid>
                  {/* <div style={{ color: "white" }}>Hello</div> */}
                </Modal>
              </Grid>
            </Grid>
            {/*             
            <Grid item xs={12} md={12} lg={12} xl={12}>
              
            </Grid> */}
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item xs={2} md={2} lg={2} xl={2}></Grid>
    </Grid>
  );
}

import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  navbarContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    fontFamily: "Open Sans",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "space-between"
    }
  },
  navChild: {
    marginLeft: "0px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "100px"
    }
  }
});

export const Home = ({ classes }) => {
  return (
    <div className={classes.navbarContainer}>
      <div className={classes.navChild}>Viajes</div>
      <div className={classes.navChild}>Guías</div>
      <div className={classes.navChild}>Recomendaciones</div>
      <div className={classes.navChild}>Cóntacto</div>
    </div>
  );
};

export default withStyles(styles)(Home);

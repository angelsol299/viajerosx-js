import React from "react";
import Navbar from "./Navbar";
import { withStyles } from "@material-ui/core/styles";

const style = () => ({
  img: {
    width: "100%",
    height: "600px",
    background: "url('static/pictures/beach.jpg')",
    position: "relative",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }
});

const Home = ({ classes }) => {
  return (
    <div className={classes.img}>
      <Navbar />
    </div>
  );
};
export default withStyles(style)(Home);

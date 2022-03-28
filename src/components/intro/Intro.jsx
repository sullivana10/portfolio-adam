import { useContext } from "react";
import { ThemeContext } from "../../context";
import "./intro.scss";

export default function Intro() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/PortfolioPic.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Adam Sullivan</h1>
          <h3>Front End Web Developer</h3>
        </div>
        <a href="#portfolio">
          <img
            src="assets/down.png"
            alt=""
            style={{ filter: darkMode && "invert(100%)" }}
          />
        </a>
      </div>
    </div>
  );
}

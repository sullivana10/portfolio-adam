import "./skills.scss";
import HTML from "../../icons/HTML.svg";
import js from "../../icons/js.svg";
import css from "../../icons/css.svg";
import sass from "../../icons/sass.svg";
import react from "../../icons/react.svg";
import git from "../../icons/git.svg";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <div className="icons">
        <div className="top">
          <img src={js} alt="" />
          <img src={HTML} alt="" />
          <img src={css} alt="" />
        </div>

        <div className="bottom">
          <img src={react} alt="" />
          <img src={sass} alt="" />
          <img src={git} alt="" />
        </div>
      </div>
    </div>
  );
}

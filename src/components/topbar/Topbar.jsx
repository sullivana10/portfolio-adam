import { useContext } from "react";
import { ThemeContext } from "../../context";
import "./topbar.scss";
import { LocalPhone, Email, GitHub } from "@material-ui/icons";
import Switch from "@material-ui/core/Switch";

export default function Topbar({ menuOpen, setMenuOpen }) {
  const theme = useContext(ThemeContext);

  const handleToggle = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Adam Sullivan
          </a>
          <div className="itemContainer">
            <LocalPhone className="icon" />
            <span>+1 612 568-4068</span>
          </div>
          <div className="itemContainer">
            <Email className="icon" />
            <span>AdamSullivanDev@gmail.com</span>
          </div>
          <div className="itemContainer">
            <GitHub className="icon" />
            <a
              href="https://github.com/sullivana10"
              target="_blank"
              rel="noreferrer"
            >
              github.com/sullivana10
            </a>
          </div>
        </div>
        <div className="right">
          <Switch className="switch" onChange={handleToggle} />
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

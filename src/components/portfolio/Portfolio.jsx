import { useState, useContext } from "react";
import { ThemeContext } from "../../context";
import "./portfolio.scss";
import { portfolioData } from "../../data.js";

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = portfolioData;
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <a href={d.link} target="_blank" rel="noreferrer">
              <img className="project" src={d.img} alt="project" />
            </a>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        style={{ filter: !darkMode && "invert(100%)" }}
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        style={{ filter: !darkMode && "invert(100%)" }}
        onClick={() => handleClick()}
      />
    </div>
  );
}

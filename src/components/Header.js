import { useState, useEffect } from "react";
import classes from "../styles/Header.module.scss";

const Header = (props) => {
  //HIDE HEADER WHEN SCROLLING
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const header = visible ? classes.visible : classes.hidden;

  return (
    <header className={`${header} ${classes.header}`}>
      <div className={classes["logo-section"]}>
        <a
          href="https://samuel-santos91.github.io/portifolio-web-page"
          aria-label="logo"
        >
          <svg
            viewBox="0 0 80 80"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="logo"
          >
            <circle r="36" cx="40" cy="40" strokeWidth="5" />
            <text x="30%" y="53%" strokeWidth="0.4" dy=".3em">
              S
            </text>
          </svg>
        </a>
      </div>
      <div className={classes.nav}>
        <ul className={classes.options}>
          <li className={classes.about}>
            <a href="/portifolio-web-page/#about">About</a>
          </li>
          <li className={classes.projects}>
            <a href="/portifolio-web-page/#projects">Projects</a>
          </li>
          <li className={classes.contact}>
            <a href="/portifolio-web-page/#contact">Contact</a>
          </li>
        </ul>
        <div className={classes.resume}>
          <a href="resume.pdf" download>
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

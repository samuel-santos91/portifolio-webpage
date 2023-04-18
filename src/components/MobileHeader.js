import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { TbArchive } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";
import { useState, useEffect } from "react";
import resume from "../docs/resume.pdf"
import classes from "../styles/MobileHeader.module.scss";

const MobileHeader = () => {
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

  const header = visible ? classes.visibleH : classes.hiddenH;
  const footer = visible ? classes.visibleF : classes.hiddenF;

  return (
    <div>
      <section className={`${header} ${classes.header}`}>
        <div className={classes["logo-section"]}>
          <a href="" aria-label="logo">
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
        <div className={classes.resume}>
          <a href={resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </section>

      <nav className={`${footer} ${classes.footer}`}>
        <div className={classes["icons-section"]}>
          <div className={`${classes.icons} ${classes.home}`}>
            <a href="#intro" aria-label="intro">
              <AiOutlineHome size={35} />
            </a>
          </div>
          <div className={`${classes.icons} ${classes.about}`}>
            <a href="#about" aria-label="about">
              <BsPerson size={35} />
            </a>
          </div>
          <div className={`${classes.iconx} ${classes.projects}`}>
            <a href="#projects" aria-label="projects">
              <TbArchive size={35} />
            </a>
          </div>
          <div className={`${classes.icons} ${classes.contact}`}>
            <a href="#contact" aria-label="contact">
              <MdOutlineMail size={35} />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileHeader;

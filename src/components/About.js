import classes from "../styles/About.module.scss";
import picture from "../images/me.jpeg";

import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const About = () => {
  return (
    <div id="about" className={classes.about}>
      <div className={classes["section-title"]}>
        <h2 className={classes.section}>About Me </h2>
        <hr />
      </div>

      <div className={classes["section-content"]}>
        <div className={classes["image-and-icons"]}>
          <div
            className={classes.image}
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <img
              className={classes.picture}
              src={picture}
              alt="my smily face"
            />
          </div>
          <div className={classes.icons}>
            <ul>
              <li>
                <a
                  href="https://github.com/samuel-santos91"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  data-aos-anchor-placement="top-bottom"
                >
                  <BsGithub size={30} aria-label="github link" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/samuel-santos-webdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                  data-aos-anchor-placement="top-bottom"
                >
                  <BsLinkedin size={30} aria-label="linkedin link" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sam_bythesea/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                  data-aos-anchor-placement="top-bottom"
                >
                  <BsInstagram size={30} aria-label="instagram link" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.text}>
          <p data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200">
            Introducing me, a{" "}
            <span className={classes.highlight}>Brazilian</span> music lover who
            has moved to <span className={classes.highlight}>Australia</span>{" "}
            and embarked on a career change into Web Development. With a diverse
            background in{" "}
            <span className={classes.highlight}>Mechanical Engineering</span>{" "}
            and teaching <span className={classes.highlight}>English</span> and{" "}
            <span className={classes.highlight}>Mathematics</span>, I have
            acquired a keen ability to adapt to new challenges and excell at{" "}
            <span className={classes.highlight}>problem-solving</span>.
            <br />
            <br /> As a{" "}
            <span className={classes.highlight}>Frontend Developer</span> driven
            by a passion for leaning new skills and technologies, I have been
            focusing my studies on{" "}
            <span className={classes.highlight}>HTML</span>,{" "}
            <span className={classes.highlight}>CSS</span> and{" "}
            <span className={classes.highlight}>Javascript</span>.
            <br />
            <br /> My goal is to become a{" "}
            <span className={classes.highlight}>Full Stack Developer</span> and
            bring my abilities and creativity to building{" "}
            <span className={classes.highlight}>dynamic</span> and{" "}
            <span className={classes.highlight}>engaging</span> web
            applications.
            <br />
            <br /> With a natural curiosity and drive to{" "}
            <span className={classes.highlight}>succeed</span>, I approach every
            project with <span className={classes.highlight}>enthusiasm</span>{" "}
            and commitment to{" "}
            <span className={classes.highlight}>excellence</span>.
            <br />
            <br />
            Technologies I have been working with recently:
          </p>
          <ul className={classes.skills}>
            <li
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos-anchor-placement="top-bottom"
            >
              HTML
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="150"
              data-aos-anchor-placement="top-bottom"
            >
              Bootstrap
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-anchor-placement="top-bottom"
            >
              JavaScript
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="250"
              data-aos-anchor-placement="top-bottom"
            >
              CSS
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-anchor-placement="top-bottom"
            >
              React.js
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="350"
              data-aos-anchor-placement="top-bottom"
            >
              TypeScript
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="350"
              data-aos-anchor-placement="top-bottom"
            >
              Sass
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

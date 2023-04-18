import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

import classes from "../styles/Projects.module.scss";
import foodOrder from "../images/foodorder.png";
import dictionary from "../images/dictionary.png";
import tasklist from "../images/tasklist.png";
import landingpage from "../images/landingpage.png";

const Projects = () => {
  return (
    <div id="projects" className={classes.projects}>
      <div className={classes["section-title"]}>
        <h2 className={classes.section}>Projects </h2>
        <hr />
      </div>

      <div className={classes["app-name"]}>
        <a
          href="https://samuel-santos91.github.io/food-ordering-app/"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <img src={foodOrder} alt="food order webpage screenshot" />
        </a>
        <div className={classes.item}>
          <h3 className={classes.title}>Food Ordering App</h3>
          <p className={classes.description}>
            Food ordering prototype that allows you to add your food choice to
            the cart, increase or remove the quantity and finalise the order.
          </p>
          <ul className={classes["made-with"]}>
            <li
              data-aos="flip-left"
              data-aos-duration="1200"
              data-aos-anchor-placement="top-bottom"
            >
              {" "}
              React.js
            </li>
            <li
              data-aos="flip-left"
              data-aos-duration="1200"
              data-aos-anchor-placement="top-bottom"
            >
              Sass
            </li>
          </ul>
          <div className={classes.icons}>
            <ul>
              <li className={classes.github}>
                <a
                  href="https://github.com/samuel-santos91/food-ordering-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub size={40} aria-label="github link" />
                </a>
              </li>
              <li className={classes.webpage}>
                <a
                  href="https://samuel-santos91.github.io/food-ordering-app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink size={40} aria-label="external link" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={classes["app-name"]}>
        <a
          href="https://samuel-santos91.github.io/dictionary-app-api/"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <img src={dictionary} alt="dictionary webpage screenshot" />
        </a>
        <div className={classes.item}>
          <h3 className={classes.title}>Online Dictionary</h3>
          <p className={classes.description}>
            Application that fetches data from an API to display the word's
            definition, part of speech, phonetics and examples in a sentence.
          </p>
          <ul className={classes["made-with"]}>
            <li
              data-aos="flip-left"
              data-aos-duration="1200"
              data-aos-anchor-placement="top-bottom"
            >
              React.js
            </li>
            <li
              data-aos="flip-left"
              data-aos-duration="1200"
              data-aos-anchor-placement="top-bottom"
            >
              Sass
            </li>
            <li
              data-aos="flip-left"
              data-aos-duration="1200"
              data-aos-anchor-placement="top-bottom"
            >
              API
            </li>
          </ul>
          <div className={classes.icons}>
            <ul>
              <li className={classes.github}>
                <a
                  href="https://github.com/samuel-santos91/dictionary-app-api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub size={40} aria-label="github link" />
                </a>
              </li>
              <li className={classes.webpage}>
                <a
                  href="https://samuel-santos91.github.io/dictionary-app-api/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink size={40} aria-label="external link" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={classes["app-name"]}>
        <a
          href="https://samuel-santos91.github.io/task-list/"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <img src={tasklist} alt="task list app screenshot" />
        </a>
        <div className={classes.item}>
          <h3 className={classes.title}>Task Organizer</h3>
          <p className={classes.description}>
            Application that creates and arranges a list of all the tasks to be
            completed. Add, edit, delete or mark as completed, any of the items.
          </p>
          <ul className={classes["made-with"]}>
            <li
              data-aos="flip-left"
              data-aos-duration="1200"
              data-aos-anchor-placement="top-bottom"
            >
              {" "}
              React.js
            </li>
            <li
              data-aos="flip-left"
              data-aos-duration="1200"
              data-aos-anchor-placement="top-bottom"
            >
              TypeScript
            </li>
            <li
              data-aos="flip-left"
              data-aos-duration="1200"
              data-aos-anchor-placement="top-bottom"
            >
              Sass
            </li>
          </ul>
          <div className={classes.icons}>
            <ul>
              <li className={classes.github}>
                <a
                  href="https://github.com/samuel-santos91/task-list"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub size={40} aria-label="github link" />
                </a>
              </li>
              <li className={classes.webpage}>
                <a
                  href="https://samuel-santos91.github.io/task-list/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink size={40} aria-label="external link" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={classes["app-name"]}>
        <a
          href="https://samuel-santos91.github.io/landing-page/"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <img src={landingpage} alt="landing-page webpage screenshot" />
        </a>
        <div className={classes.item}>
          <h3 className={classes.title}>Landing Page</h3>
          <p className={classes.description}>
            Fully responsive landing page project of a guitar store that also
            contains a survey form to promote classes to interested students.
          </p>
          <ul className={classes["made-with"]}>
            <li
              data-aos="flip-left"
              data-aos-duration="1200"
              data-aos-anchor-placement="top-bottom"
            >
              HTML
            </li>
            <li
              data-aos="flip-left"
              data-aos-duration="1200"
              data-aos-anchor-placement="top-bottom"
            >
              CSS
            </li>
          </ul>
          <div className={classes.icons}>
            <ul>
              <li className={classes.github}>
                <a
                  href="https://github.com/samuel-santos91/landing-page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub size={40} aria-label="github link" />
                </a>
              </li>
              <li className={classes.webpage}>
                <a
                  href="https://samuel-santos91.github.io/landing-page/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink size={40} aria-label="external link" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={classes["visit-github"]}>
        <h4>
          Visit my{" "}
          <span
            className={classes.highlight}
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            GitHub
          </span>{" "}
          account for more projects
        </h4>
        <div className={classes.github}>
          <a
            href="https://github.com/samuel-santos91"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <BsGithub size={30} aria-label="github link" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;

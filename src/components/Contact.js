import classes from "../styles/Contact.module.scss";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className={classes.contact}>
      <div className={classes["section-title"]}>
        <h2 className={classes.section}>Contact </h2>
        <hr />
      </div>

      <div className={classes["say-hello"]}>
        <h3>What's the next move?</h3>
        <p>
          Send me an email at{" "}
          <span className={classes.highlight}>
            samuel.santiagosantos@hotmail.com
          </span>{" "}
          by clicking on the link bellow or give me a shout on{" "}
          <span className={classes.highlight}>social media</span>.
        </p>
        <a
          className={classes["email-link"]}
          href="mailto:samuel.santiagosantos@hotmail.com"
          rel="noopener noreferrer"
          target="_blank"
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          Send Email
        </a>
        <div className={classes.icons}>
          <ul>
            <li className={classes.github}>
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
            <li className={classes.linkedin}>
              <a
                href="https://www.linkedin.com/in/samuel-santos-webdev/"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
                data-aos-anchor-placement="top-bottom"
              >
                <BsLinkedin size={30} aria-label="linkedin link" />
              </a>
            </li>
            <li className={classes.instagram}>
              <a
                href="https://www.instagram.com/sam_bythesea/"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
                data-aos-anchor-placement="top-bottom"
              >
                <BsInstagram size={30} aria-label="instagram link" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;

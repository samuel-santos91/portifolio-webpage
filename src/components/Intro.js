import classes from "../styles/Intro.module.scss";

const Intro = () => {
  return (
    <div id="intro" className={classes.intro}>
      <section className={classes.info}>
        <p>Hello, I am</p>
        <h1>Samuel Santos.</h1>
        <h2>
          {" "}
          A&nbsp;
          <span className={`${classes.highlight} ${classes["animation-one"]}`}>
            front-end
          </span>{" "}
          developer
          <br /> that loves to
          <br />{" "}
          <span className={`${classes.highlight} ${classes["animation-two"]}`}>
            discover
          </span>{" "}
          and{" "}
          <span
            className={`${classes.highlight} ${classes["animation-three"]}`}
          >
            create
          </span>
          <span className={classes["animation-three"]}>.</span>
        </h2>
      </section>
      <section className={classes.quote}>
        <p>
          <i>
            “Every great developer you know got there by solving problems they
            were unqualified to solve until they actually did it.” <br />
            <br />
            <strong>Patrick McKenzie</strong>
          </i>
        </p>
      </section>
    </div>
  );
};

export default Intro;

import classes from "../styles/LogoIntro.module.scss"

const LogoIntro = () => {
  return ( 
    <aside className={classes["logo-animation"]}>
      <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
        <g>
          <circle
            r="7"
            cx="40"
            cy="40"
            strokeWidth="0.8"
            strokeLinecap="round"
          />
          <text
            x="50%"
            y="50.5%"
            strokeWidth="0.4"
            strokeLinecap="round"
            dy=".3em"
          >
            S
          </text>
        </g>
      </svg>
    </aside>
  );
};

export default LogoIntro;

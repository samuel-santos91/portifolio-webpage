import Intro from "./components/Intro";
import MobileHeader from "./components/MobileHeader";
import Header from "./components/Header";
import LogoIntro from "./components/LogoIntro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";

const App = () => {
  //INITIATE ANIMATION LIBRARY
  useEffect(() => {
    AOS.init();
  }, []);

  setTimeout(() => {
    AOS.refresh();
  }, 500);

  //COUNTDOWN TO LOAD INTRO
  const [isVisible, setIsVisible] = useState(false);
  const loadIntro = () => {
    setIsVisible(true);
  };
  setTimeout(loadIntro, 4500);

  return (
    <div>
      <LogoIntro />
      {isVisible && <Header />}
      {isVisible && <MobileHeader />}
      {isVisible && <Intro />}
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;

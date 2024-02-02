import React from "react";
import Container from "../reusable/Container";
import styles from "./home.module.css";
import Lottie from "lottie-react";
import Lotte from "../../assets/hero-lotte.json";
import About from "../about/About";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import ScrollToTop from "../reusable/ScrollToTop";

function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.center}>
          <div className={styles.content}>
            <div className={styles.subtitle1}>Hello my name is</div>
            <div className={styles.title}>DevAbhi</div>
            <div className={styles.title}>Software Developer</div>
            <div>
              <p className={styles.subtitle2}>
                I'm a software developer focused on turning ideas into
                functional and delightful user experiences. I have experience
                working with complex problems and creating unique solutions.
              </p>
            </div>
            <div className="flex flex-row gap-10 mt-8 sm:w-full">
              <a href="#project" className={styles.discoverBtn}>
                Discover my projects{" "}
              </a>
              <a href="#contact" className={styles.discoverBtn}>
                Hire me
              </a>
            </div>
          </div>
          <div className={styles.can}>
            <Lottie
              className={styles.animation}
              animationData={Lotte}
              loop={true}
            />
          </div>
        </div>
      </div>

      <section id="about">
        <About />
      </section>
      <section id="project">
        <Projects />
      </section>
      {/* <section id="blog">
        <Blog />
      </section> */}
      <section id="contact">
        <Contact />
      </section>
      <section id="scrollToTop">
        <div className={styles.scroll}>
          <ScrollToTop />
        </div>
      </section>
    </>
  );
}

export default Home;

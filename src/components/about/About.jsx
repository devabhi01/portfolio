import React from "react";
import styles from "./about.module.css";

import MyImg from "../../assets/me.jpg";

function About() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <div className={styles.title}>About me</div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.content}>
          <div className={styles.detail}>
            <div className="text-3xl font-semibold text-white ">
              I’m Abhishek, a Software Developer.
            </div>
            <div className="line-height-normal  mt-12 text-lg text-start">
              <p className=" text-lg font-medium text-gray-300 xl:mb-8 lg:leading-snug">
                I specialize in building responsive full-stack web applications.
                I am the guy who can handle the entire project, from creating an
                attractive web application. I am passionate about learning new
                technologies and understand that there is more than one way to
                accomplish a task. Though I am most proficient in building MERN
                Stack applications, I am a quick learner and can pick up new
                tech stacks as needed. I believe that being a great developer is
                not about using one specific language but about choosing the
                best tool for the job. My career in web development began in
                2022, and since then, I've created several online applications.
              </p>
            </div>
          </div>
          <div className={styles.image}>
            <img src={MyImg} alt="myImg" />
          </div>
          <div className={styles.primary_skill}>
            <h1 className=" text-3xl font-bold xl:text-2xl">
              My Primary Skills
            </h1>
            <p className=" mt-6 text-lg leading-normal lg:leading-snug">
              I use a number of tools to speed up and simplify my development
              efforts. I am proficient with ReactJS, ExpressJs, and MongoDB
              which are used for all development processes, including
              interactions, and user experience. Below is a list of some of the
              tools and technologies that I use and am knowledgeable about:
            </p>
            <div className={styles.skillboxes}>
              <div className={styles.skillbox}>
                <h2 className=" text-xl font-bold xl:font-bold">React Js</h2>
                <p className=" text-base mt-2">
                  Developing a functional front-end application that will engage
                  the target audience to the product.
                </p>
              </div>
              <div className={styles.skillbox}>
                <h2 className=" text-xl font-bold">Node Js/ Express Js</h2>
                <p className=" text-base mt-2">
                  Building, shipping and maintaining a backend system from
                  conception to functional product.
                </p>
              </div>
              <div className={styles.skillbox}>
                <h2 className=" text-xl font-bold">MongoDB</h2>
                <p className=" text-base mt-2">
                  Creating a database that aligns with the project needs and
                  performance requirements.
                </p>
              </div>
              <div className={styles.skillbox}>
                <h2 className=" text-xl font-bold">React Native</h2>
                <p className=" text-base mt-2">
                  Working on product's mobile application development with a
                  focus on consistency, quality and efficiency.
                </p>
              </div>
              <div className={styles.skillbox}>
                <h2 className=" text-xl font-bold">Python</h2>
                <p className=" text-base mt-2">
                  Proficient in Python, leveraging its versatility for various
                  development tasks and in competetive programming.
                </p>
              </div>
              <div className={styles.skillbox}>
                <h2 className=" text-xl font-bold">Html</h2>
                <p className=" text-base mt-2">
                  Experienced in creating well-organized HTML markup to enhance
                  website usability and SEO.
                </p>
              </div>
              <div className={styles.skillbox}>
                <h2 className=" text-xl font-bold">Css</h2>
                <p className=" text-base mt-2">
                  Capable of implementing responsive design using media queries
                  for optimal display on various devices.
                </p>
              </div>
              <div className={styles.skillbox}>
                <h2 className=" text-xl font-bold">Javascript</h2>
                <p className=" text-base mt-2">
                  Familiar with JavaScript frameworks and his various libraries
                  for building scalable web applications.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.pastExp}>
            <h1 className=" text-3xl font-bold ml-16 text-white">
              Past Experience
            </h1>
            <p className=" ml-16 text-gray-300">
              More information about my education, achievements, and experience.
            </p>
            <a
              target="_blank"
              download="Abhishek-Resume"
              href="https://drive.google.com/file/d/1LK6r_h0T6daK2sYkHHuUeD3U1f6soYV5/view?usp=sharing"
              className={styles.resumeBtn}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

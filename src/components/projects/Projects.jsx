import React from "react";

import styles from "./projects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

import Project1 from "../../assets/project1.png";
import Project2 from "../../assets/app_ss.png";

function Projects() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <h1 className=" text-[42px] md:text-4xl font-semibold text-white">
          My Projects
        </h1>
        <div className={styles.line}></div>
      </div>

      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.swiper}
      >
        <SwiperSlide>
          <div className={styles.slideData}>
            <div className={styles.imgSlide}>
              <img src={Project1} alt="" className={styles.img} />
            </div>
            <div className={styles.info}>
              <h1 className=" text-2xl lg:text-xl md:text-base font-semibold text-slate-200">
                The Right Guru Website
              </h1>
              <p className="text-lg lg:text-base md:text-sm sm:text-xs font-normal text-slate-200">
                <span>
                  This is EdTech website for company that provide online and
                  offline tuition for the students from Primary to XII and also
                  for competetive exams.
                </span>
                <br />
                <span>
                  I have use <b>ReactJs</b>, <b>Bootstrap</b> to build this
                  frontend for and <b>NodeJs</b>, <b>Express</b> for the
                  backend.
                </span>
              </p>
              <div className={styles.btns}>
                <button className={styles.previewBtn}>View website</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slideData}>
            <div className={styles.imgSlide}>
              <img src={Project2} alt="" className={styles.img} />
            </div>
            <div className={styles.info}>
              <h1 className=" text-2xl lg:text-xl md:text-base font-semibold text-slate-200">
                The Right Guru Mobile Application
              </h1>
              <p className="text-lg lg:text-base md:text-sm sm:text-xs font-normal text-slate-200">
                <span>
                  This is EdTech website for company that provide online and
                  offline tuition for the students from Primary to XII and also
                  for competetive exams.
                </span>
                <br />
                <span>
                  I have use <b>React Native</b> for frontend ,<b>NodeJs</b>,{" "}
                  <b>Express</b> for backend and <b>MongoDB</b> for Database.
                </span>
              </p>
              <div className={styles.btns}>
                <button className={styles.previewBtn}>View App</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Projects;

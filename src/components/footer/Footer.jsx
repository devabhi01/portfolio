import React from "react";
import styles from "./footer.module.css";
import Logo from "../../assets/logo.png";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.section_1}>
          <div className="flex flex-row gap-2 cursor-pointer items-center">
            <FaLinkedinIn size={25} color="#fff" />
            <p className=" text-lg text-slate-200 lg:text-base">Linkedin</p>
          </div>
          <div className="flex flex-row gap-2 cursor-pointer items-center">
            <FaGithub size={25} color="#fff" />
            <p className=" text-lg text-slate-200 lg:text-base">Github</p>
          </div>
        </div>
        <div className={styles.section_2}><img className={styles.logo} src={Logo} alt="logo" /></div>
        
        <div className={styles.section_1}>
          <div className="flex flex-row gap-2 cursor-pointer items-center ">
            <FaInstagram size={25} color="#fff" />
            <p className=" text-lg text-slate-200 lg:text-base">Instagram</p>
          </div>
          <div className="flex flex-row gap-2 cursor-pointer items-center">
            <CiMail size={25} color="#fff" />
            <p className=" text-lg text-slate-200 lg:text-base">d4devabhi@gmail.com</p>
          </div>
        </div>
      </div>
      <h2 className=" text-base text-slate-200 tracking-[1.5px] font-semibold flex justify-center mt-8">
        DevAbhi
      </h2>
      <h2 className=" text-sm text-slate-200 tracking-[1.5px] font-semibold flex justify-center mt-8 mb-8">
      Copyright ©2024 All rights reserved
      </h2>
    </div>
  );
}

export default Footer;

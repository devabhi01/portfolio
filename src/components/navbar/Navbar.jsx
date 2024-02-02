import React, { useState } from "react";
import styles from "./navbar.module.css";
import Logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleClick = () => {
    setIsNavOpen(!isNavOpen);
    if (!isNavOpen) {
      // If opening the nav, set a timeout to close it after 3 seconds (adjust the duration as needed)
      setTimeout(() => {
        setIsNavOpen(false);
      }, 5000);
    }
  };

  return (
    <header>
      <nav className={styles.navbar}>
        <a href="/">
          <img className={styles.logo} src={Logo} alt="Logo" />
        </a>
        <div className={styles.navlink}>
          <ul className={styles.navlinks}>
            <a
              
              href="/"
              className={styles.link}
            >
              Home
            </a>
            <a href="#about" className={styles.link}>
              About me
            </a>
            <a href="#project" className={styles.link}>
              Projects
            </a>
            {/* <li className={styles.link}>Blog</li> */}
            <a href="#contact" className={styles.link}>
              Contact
            </a>
          </ul>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1LK6r_h0T6daK2sYkHHuUeD3U1f6soYV5/view?usp=sharing"
            className={styles.resumeBtn}
          >
            Resume
          </a>
        </div>
        {/* Mobile View */}
        {isNavOpen && (
          <div className={styles.navlink2}>
            <ul className={styles.navlinks2}>
              <a href="/" className={styles.link}>
                Home
              </a>
              <a href="#about" className={styles.link}>
                About me
              </a>
              <a href="#project" className={styles.link}>
                Projects
              </a>
              {/* <li className={styles.link}>Blog</li> */}
              <a href="#contact" className={styles.link}>
                Contact
              </a>
            </ul>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1LK6r_h0T6daK2sYkHHuUeD3U1f6soYV5/view?usp=sharing"
              className={styles.resumeBtn}
            >
              Resume
            </a>
          </div>
        )}

        <div className={styles.navToggleBtn} onClick={handleToggleClick}>
          {isNavOpen ? (
            <IoClose size={35} color="#fff" />
          ) : (
            <FaBars size={25} color="#fff" />
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

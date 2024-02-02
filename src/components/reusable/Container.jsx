
import React from "react";
import styles from "./container.module.css";
import Navbar from "../navbar/Navbar";

function Container({ children }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default Container;

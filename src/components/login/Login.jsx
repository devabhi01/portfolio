import React from "react";
import styles from "./login.module.css";

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}> Admin Login</h2>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input placeholder="Email" type="email" id="email" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input placeholder="Password" type="password" id="password" />
          </div>
          <div className={styles.formGroup}>
            <button className={styles.button}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

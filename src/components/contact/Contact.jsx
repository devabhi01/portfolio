import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.css";
import { CiMail } from "react-icons/ci";
import { IoHomeOutline, IoCallOutline } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ql1td2v",
        "template_v44taqo",
        form.current,
        "kEMKrBYUUFXupNa2X"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();

          // Show alert message
          toast.success("Message sent successfully!", {
            duration: 3000,
            position: "bottom-right",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <h1 className=" text-[42px] font-semibold text-white">Contact</h1>
          <div className={styles.line}></div>
        </div>
        <div className={styles.content}>
          <div className={styles.text_area}>
            <h1 className=" text-3xl font-bold text-slate-200 tracking-[1px]">
              Interested ?
            </h1>
            <h1 className=" text-3xl font-bold text-slate-200 tracking-[1px]">
              Let's Get in Touch!
            </h1>
            <p className=" text-xl text-center  text-slate-300  mt-4 mb-4">
              If you like my work or my experience, feel free to contact me. I’m
              interested in ambitious and large projects. However, if you have
              other requests or questions, go ahead and ask me!
            </p>
          </div>
          <div className={styles.form_area}>
            <form ref={form} onSubmit={sendEmail} className={styles.form}>
              <input
                className={styles.form_input}
                id="name"
                name="user_name"
                type="text"
                autoComplete="off"
                placeholder="Enter your name"
                required
              />
              <input
                className={styles.form_input}
                id="mail"
                type="email"
                name="user_email"
                placeholder="Enter your email"
                autoComplete="off"
                required
              />
              <input
                className={styles.form_input}
                id="subject"
                type="text"
                name="subject"
                autoComplete="off"
                placeholder="Enter subject"
                required
              />
              <textarea
                className={styles.form_textarea}
                name="message"
                id="message"
                rows="5"
                autoComplete="off"
                placeholder="Enter message"
                required
              ></textarea>
              <button type="submit" className={styles.submitBtn}>
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className={styles.address}>
          <div className=" flex flex-row gap-3">
            <IoHomeOutline className={styles.icons} />
            <div className=" flex flex-col">
              <p className=" text-slate-200 font-bold">New Delhi, India</p>
              <p className="text-slate-300">West Delhi</p>
            </div>
          </div>
          <div className=" flex flex-row gap-3">
            <IoCallOutline className={styles.icons} />
            <div className=" flex flex-col">
              <p className="text-slate-200 font-bold">+91 9625061058</p>
              <p className="text-slate-300">Mon to Friday</p>
            </div>
          </div>
          <div className=" flex flex-row gap-3">
            <CiMail className={styles.icons} />
            <div className=" flex flex-col">
              <p className="text-slate-200 font-bold">d4devabhi@gmail.com</p>
              <p className="text-slate-300">Send me your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default Contact;

"use client";

import Toast from "@/components/Toast/Toast";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [showToast, setShowToast] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      toast.success("Message Sent!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" placeholder="name" required className={styles.input} />
      <input
        type="text"
        placeholder="email"
        required
        className={styles.input}
      />
      <textarea
        className={styles.textArea}
        placeholder="message"
        cols="30"
        rows="8"
        required
      ></textarea>
      <button className={styles.button}>Send</button>
      <ToastContainer />
    </form>
  );
};

export default ContactForm;

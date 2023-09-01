"use client";

import Toast from "@/components/Toast/toast";
import React, { useState } from "react";
import styles from "./page.module.css";

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
      if (res.ok) {
        setShowToast(true); 
        console.log(showToast)
      }
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
  
      <input type="text" placeholder="name" required className={styles.input} />
      <input type="text" placeholder="email" required className={styles.input} />
      <textarea
        className={styles.textArea}
        placeholder="message"
        cols="30"
        rows="8"
        required
      ></textarea>
      <button className={styles.button}>Send</button>
      {showToast && <Toast />}
    </form>
  );
};

export default ContactForm;

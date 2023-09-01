"use client";
import Button from "@/components/Button/Button";
import React, { useState } from "react";
import styles from "./page.module.css";

const ContactForm = () => {
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
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" placeholder="name" className={styles.input} />
      <input type="text" placeholder="email" className={styles.input} />
      <textarea
        className={styles.textArea}
        placeholder="message"
        cols="30"
        rows="8"
      ></textarea>
      <button className={styles.button}>Send</button>
    </form>
  );
};

export default ContactForm;

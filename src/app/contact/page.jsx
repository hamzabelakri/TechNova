import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import ContactForm from "./contactForm";

export const metadata = {
  title: "TechNova Contact Information",
  description: "This is Contact Page",
};



const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
       <ContactForm/>
      </div>
    </div>
  );
};

export default Contact;
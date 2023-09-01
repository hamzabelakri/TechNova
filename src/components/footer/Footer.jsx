import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      {/*       <div className={styles.elecontainer}>
        <div>
          <h6>ABOUT</h6>
          <p>
            Lorem, isicing elit. Libero nemo a voluptatem eius facilis possimus corporis officiis, quos recusandae voluptatibus beatae voluptate reiciendis iusto magni fugiat quisquam perspiciatis atque unde.
          </p>
        </div>
        <div>
          <h6>CATEGORIES</h6>
          <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit cumque tenetur maxime esse nihil distinctio repellat illo, quibusdam nesciunt quis, veniam placeat enim praesentium minus ducimus, cupiditate expedita architecto rerum?
          </p>
        </div>
        <div>
          <h6>QUICK LINKS</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum veritatis odio aperiam id, quasi impedit hic quaerat ipsa blanditiis veniam! Ad aspernatur dolorum harum adipisci ullam sapiente alias ratione et.
          </p>
        </div>
      </div> */}
      <hr className={styles.hr}></hr>
      <div className={styles.container}>
        <div>
          <p>©2023 TechNova. All rights reserved.</p>
        </div>
        <div className={styles.social}>
          <Image
            src="/1.png"
            width={25}
            height={25}
            className={styles.icon}
            alt="Facebook Account"
          />
          <Image
            src="/2.png"
            width={25}
            height={25}
            className={styles.icon}
            alt="Instagram Account"
          />
          <Image
            src="/3.png"
            width={25}
            height={25}
            className={styles.icon}
            alt="Twitter Account"
          />
          <Image
            src="/4.png"
            width={25}
            height={25}
            className={styles.icon}
            alt="Youtube Account"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

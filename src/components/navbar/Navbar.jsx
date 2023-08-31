import React from "react";
import { navLinks } from "@/constants";
import styles from "./navbar.module.css";
import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { useSession } from "next-auth/react";
import LogoutButton from "./LogoutButton";
const Navbar = () => {

  return (
    <div className={styles.container}>
      <Link href="/">TechNova </Link>
      <div className={styles.links}>
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      
        <LogoutButton/>
      </div>
    </div>
  );
};

export default Navbar;

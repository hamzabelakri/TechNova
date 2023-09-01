import React from "react";
import { navLinks } from "@/constants";
import styles from "./navbar.module.css";
import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import LogoutButton from "./LogoutButton";
import { Sriracha } from 'next/font/google'
 
const roboto = Sriracha({
  weight: '400',
  preload: false,
})
const Navbar = () => {

  return (
    <div className={styles.container}>
  
      <Link href="/" className={roboto.className} >
        <h1 className={styles.title}>TechNova</h1> </Link>
      <div className={styles.links}>
      <DarkModeToggle />
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

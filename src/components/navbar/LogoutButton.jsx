"use client";
import { signOut, useSession } from 'next-auth/react';
import styles from "./navbar.module.css";

import React from 'react'

const LogoutButton = () => {
    const session=useSession()

  return (
    <div>
          {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>

        )}
    </div>
  )
}

export default LogoutButton
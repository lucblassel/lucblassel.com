import Link from "next/link";
import styles from "../styles/NavBar.module.css";
import { Children } from "react";

export default function NavBar({ children }) {
  return (
      <>
    <div className={styles.navbar}>
      <Link href="/">
        <a className={styles.navbutton}>Home</a>
      </Link>
      <Link href="/blog">
        <a className={styles.navbutton}>Blog</a>
      </Link>
      <Link href="/about">
        <a className={styles.navbutton}>About Me</a>
      </Link>
    </div>
    <div className={styles.content}> 
        { children }
    </div>
    </>
  );
}

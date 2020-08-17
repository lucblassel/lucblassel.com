import Link from "next/link";
import styles from "../styles/NavBar.module.css";

export default function NavBar({ active, children }) {
  let blogStyle = styles.navbutton;
  let aboutStyle = styles.navbutton;
  let stuffStyle = styles.navbutton;
  let contactStyle = styles.navbutton;

  switch (active) {
    case "blog":
      blogStyle = styles.active;
      break;
    case "about":
      aboutStyle = styles.active;
      break;
    case "stuff":
      stuffStyle = styles.active;
      break;
    case "contact":
      contactStyle = styles.active;
      break;
  }

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.leftContainer}>
          <Link href="/">
            <a className={styles.navbutton}>Home</a>
          </Link>
          <Link href="/about">
            <a className={aboutStyle}>About Me</a>
          </Link>
          <Link href="/blog">
            <a className={blogStyle}>Blog</a>
          </Link>
          <Link href="/stuff">
            <a className={stuffStyle}>Other Stuff</a>
          </Link>
        </div>
        {/* <div className={styles.rightStick}> */}
        <div className={styles.rightContainer}>
          <Link href="/contact">
            <a className={contactStyle}>Contact Me</a>
          </Link>
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </>
  );
}

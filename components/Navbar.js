import Link from "next/link";
import styles from "../styles/NavBar.module.css";

export default function NavBar({ active, children }) {
  
  let blogStyle = styles.navbutton
  let aboutStyle = styles.navbutton

  if (active == "blog") {
    blogStyle = styles.active
  } else if (active == "about") {
    aboutStyle = styles.active
  }


  return (
      <>
    <div className={styles.navbar}>
      <Link href="/">
        <a className={styles.navbutton}>Home</a>
      </Link>
      <Link href="/blog">
        <a className={blogStyle}>Blog</a>
      </Link>
      <Link href="/about">
        <a className={aboutStyle}>About Me</a>
      </Link>
    </div>
    <div className={styles.content}> 
        { children }
    </div>
    </>
  );
}

import Link from "next/link";
import styles from "../styles/NavBar.module.css";

export default function ContactButton() {
  return (
    <div className={styles.rightStick}>
      <Link href="/contact">
        <a className={styles.navbutton}>Contact Me</a>
      </Link>
    </div>
  );
}

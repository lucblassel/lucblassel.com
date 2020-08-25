import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  let copyright = (
    <FontAwesomeIcon icon={faCopyright} height="1rem" color="grey" />
  );
  return (
    <footer className={styles.footer}>
      <span className={styles.iconContainer}>{copyright}</span>
      Luc Blassel. 2020
    </footer>
  );
}

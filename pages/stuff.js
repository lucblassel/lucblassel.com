import NewHead from "../components/NewHead";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <NavBar active="stuff">
      <div className={styles.container}>
        <NewHead>
          <title>Luc Blassel - Other stuff</title>
          {/* <link rel="icon" href="/icon.svg" /> */}
        </NewHead>
        <main className={styles.main}>
          <h1 className={styles.title}>Other stuff</h1>

          <p className={styles.description}>
            do I find it cool ? if so it'll go here :) 
          </p>

        <div className={styles.grid}>
            <p> This will come later...</p>
        </div>

      </main>
      <Footer/>
      </div>
    </NavBar>
  );
}

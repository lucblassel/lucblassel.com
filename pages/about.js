import Head from "next/head";
import NavBar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <NavBar>
      <div className={styles.container}>
        <Head>
          <title>Luc Blassel - About Me</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>Luc Blassel</h1>

          <p className={styles.description}>
            PhD. student in computational Biology <br />- interested in Machine
            Learning -
          </p>

        <div className={styles.grid}>
            <p> This will come later...</p>
        </div>

      </main>
      <footer className={styles.footer}>© Luc Blassel. 2020</footer>
      </div>
    </NavBar>
  );
}

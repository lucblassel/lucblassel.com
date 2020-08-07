import Head from "next/head";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <NavBar>
      <div className={styles.container}>
        <Head>
          <title>Luc Blassel - Other stuff</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
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

import Head from "next/head";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <>
      <NavBar active="contact">
        <Head>
          <title>Luc Blassel - Contact Me</title>
          <link rel="icon" href="/favicon.ico" />
          <script src="https://kwes.io/js/kwes.js"></script>
        </Head>

        <div className={styles.formWrapper}>
          <div className="kwes-form">
            <form
              method="POST"
              action="https://kwes.io/api/foreign/forms/DlVe9TeECoWe44QRAGTW"
            >
              <div className={styles.titleHeader}>
                <h2>Contact form</h2>
                <p>
                  If you have any feedback or requests or anything you can think
                  of send it here 🙂
                </p>
              </div>
              <div className={styles.subHeader}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Name: </label>
                  <input
                    type="text"
                    name="name"
                    rules="required|max:255"
                    style={{ width: "100%" }}
                    placeholder="Your Name"
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email: </label>
                  <input
                    type="email"
                    name="email"
                    rules="required|email"
                    style={{ width: "100%" }}
                    placeholder="your.email@right.here"
                  />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message">Message: </label>
                <div className={styles.textcontainer}>
                  <textarea
                    type="text"
                    name="message"
                    rules="required|max:1000"
                    styles={{ height: "100%", width: "100%" }}
                    placeholder="Message of praise goes here!"
                  />
                </div>
              </div>
              <div className={styles.buttonContainer}>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </NavBar>
    </>
  );
}

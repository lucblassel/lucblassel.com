import NewHead from "../components/NewHead";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { getSortedPostData } from "../lib/posts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faOrcid,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "../components/Footer";
import ContactButton from "../components/ContactButton";

export default function Home({ allPostsData }) {
  return (
    <div className={styles.container}>
      <NewHead>
        <title>Luc Blassel - Home</title>
      </NewHead>
      <ContactButton />
      <main className={styles.main}>
        <h1 className={styles.title}>LucBlassel.com</h1>
        <img src="/images/me.jpg" alt="my face" className={styles.portrait} />
        <p className={styles.description}>
          PhD. student in computational Biology <br />- interested in Machine
          Learning -
        </p>

        <div className={styles.grid}>
          <Link href="/about">
            <a href="" className={styles.card}>
              <h3> About Me</h3>
              <p>A little bit about who I am.</p>
            </a>
          </Link>

          <Link href="/blog">
            <a href="" className={styles.card}>
              <h3>Blog</h3>
              <p>Some posts I have written.</p>
            </a>
          </Link>

          <Link href="/stuff">
            <a href="" className={styles.card}>
              <h3>Other stuff</h3>
              <p>
                Some other stuff I've done.
              </p>
            </a>
          </Link>

          <Link href="/publications">
            <a href="" className={styles.card}>
              <h3>Publications</h3>
              <p>
                Publications I've been a part of.
              </p>
            </a>
          </Link>

          <div className={styles.socialCard}>
            <h3>Find me on the internet</h3>
            <div className={styles.iconContainer}>
              <a href="https://github.com/lucblassel">
                <FontAwesomeIcon icon={faGithub} height="2rem" />
              </a>
              <a href="https://research.pasteur.fr/en/member/luc-blassel/">
                <FontAwesomeIcon icon={faBriefcase} height="2rem" />
              </a>
              <a href="https://www.linkedin.com/in/luc-blassel/">
                <FontAwesomeIcon icon={faLinkedin} height="2rem" />
              </a>
              <a href="https://orcid.org/0000-0002-6598-7673">
                <FontAwesomeIcon icon={faOrcid} height="2rem" />
              </a>
              <a href="https://scholar.google.fr/citations?user=RYs6rFwAAAAJ&hl=en&oi=ao">
                <FontAwesomeIcon icon={faGraduationCap} height="2rem" />
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostData();
  return {
    props: { allPostsData },
  };
}

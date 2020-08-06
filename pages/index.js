import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { getSortedPostData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Luc Blassel - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>LucBlassel.com</h1>

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
              <p>Some blog posts I have written</p>
            </a>
          </Link>

          <Link href="/stuff">
            <a href="" className={styles.card}>
              <h3>Other stuff</h3>
              <p>
                Some other stuff I've done and don't really know where to put.
              </p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>© Luc Blassel. 2020</footer>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostData();
  return {
    props: { allPostsData },
  };
}

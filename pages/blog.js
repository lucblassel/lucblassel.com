import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Blog.module.css";
import { getSortedPostData } from "../lib/posts";
import Markdown from "../components/Markdown";
import DateBlock from "../components/DateBlock";
import NavBar from "../components/Navbar";

export default function Blog({ allPostsData }) {
  return (
    <NavBar>
      <div className={styles.container}>
        <Head>
          <title>Luc Blassel - Blog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Blog posts</h1>

          <p className={styles.description}>
            Articles on stuff that interest me
          </p>

          <div className={styles.grid}>
            {allPostsData.map(({ id, date, title, excerpt }) => {
              return (
                <Link href="/blog/[id]" as={`/blog/${id}`} key={id}>
                  <a className={styles.card}>
                    <h3> {title} </h3>
                    <p>
                      <DateBlock dateString={date} />
                      <br />
                      <Markdown>{excerpt}</Markdown>
                    </p>
                  </a>
                </Link>
              );
            })}
          </div>
        </main>

        <footer className={styles.footer}>© Luc Blassel. 2020</footer>
      </div>
    </NavBar>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostData();
  return {
    props: { allPostsData },
  };
}

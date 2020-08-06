import Head from "next/head";
import { getAllIds, getPostData } from "../../lib/posts";
import Markdown from "../../components/Markdown";
import DateBlock from "../../components/DateBlock";
import styles from "../../styles/Post.module.css";
import NavBar from "../../components/Navbar";

export default function Post({ postData }) {
  return (
    <NavBar>
      <div className={styles.container}>
        <Head>
          <title> {postData.title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className={styles.header}>
          <h1 className={styles.title}>{postData.title}</h1>
          <DateBlock dateString={postData.date} />
        </header>
        <main className={styles.main}>
          <Markdown>{postData.content}</Markdown>
        </main>
      </div>
    </NavBar>
  );
}

export async function getStaticPaths() {
  let paths = getAllIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
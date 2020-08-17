import NewHead from "../../components/NewHead";
import { getAllIds, getPostData } from "../../lib/posts";
import Markdown from "../../components/Markdown";
import DateBlock from "../../components/DateBlock";
import styles from "../../styles/Post.module.css";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Post({ postData }) {
  return (
    <NavBar>
      <div className={styles.container}>
        <NewHead>
          <title> {postData.title}</title>
          <link rel="icon" href="/favicon.ico" />
        </NewHead>
        <header className={styles.header}>
          <h1 className={styles.title}>{postData.title}</h1>
          <DateBlock dateString={postData.date} />
        </header>
        <main className={styles.main}>
          <Markdown>{postData.content}</Markdown>
        </main>
      </div>
      <Footer/>
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

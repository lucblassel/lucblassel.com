import NewHead from "../components/NewHead";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import DateBlock from "../components/DateBlock";
import Markdown from "../components/Markdown";
import styles from "../styles/Blog.module.css";
import { getSortedData } from "../lib/publications";

export default function About({ allSummaries }) {
  return (
    <NavBar active="publications">
      <div className={styles.container}>
        <NewHead>
          <title>Luc Blassel - Publications</title>
          {/* <link rel="icon" href="/icon.svg" /> */}
        </NewHead>
        <main className={styles.main}>
          <h1 className={styles.title}>Publications</h1>

          <div className={styles.grid}>
            {allSummaries.map(({ id, date, title, url, abstract, authors }) => {
              return (
                <a className={styles.card} href={url} key={id}>
                  <h3> {title} </h3>
                  <h4> {authors} </h4>
                  <p>
                    <DateBlock dateString={date} />
                    <br />
                    <Markdown>{abstract}</Markdown>
                  </p>
                </a>
              );
            })}
          </div>
        </main>
        <Footer />
      </div>
    </NavBar>
  );
}

export async function getStaticProps() {
  const allSummaries = getSortedData();
  return {
    props: { allSummaries },
  };
}

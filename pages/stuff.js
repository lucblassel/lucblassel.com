import NewHead from "../components/NewHead";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import DateBlock from "../components/DateBlock";
import Markdown from "../components/Markdown";
import styles from "../styles/Blog.module.css";
import { getSortedData } from "../lib/stuff";

export default function About({ allSummaries }) {
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
            Random mish-mash of stuff I find cool, <br />
            or don't quite know where to put...
          </p>

          <div className={styles.grid}>
            {allSummaries.map(({ id, date, title, url, content }) => {
              return (
                <a className={styles.card} href={url} key={id}>
                  <h3> {title} </h3>
                  <p>
                    <DateBlock dateString={date} />
                    <br />
                    <Markdown>{content}</Markdown>
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

import NewHead from "../components/NewHead";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import ResumeItem from "../components/ResumeItem";
import styles from "../styles/Home.module.css";
import fs from "fs";
import path from "path";

export default function About({ experience, education }) {
  return (
    <NavBar active="about">
      <div className={styles.container}>
        <NewHead>
          <title>Luc Blassel - About Me</title>
          {/* <link rel="icon" href="/icon.svg" /> */}
        </NewHead>
        <main className={styles.main}>
          <h1 className={styles.title}>Luc Blassel</h1>
          <img src="/images/me.jpg" alt="my face" className={styles.portrait} />
          <p className={styles.description}>
            PhD. student in computational Biology <br />- interested in Machine
            Learning -
          </p>

          <div className={styles.resume}>
            <div className={styles.subsection}>
              <h2 className={styles.subtitle}>Experience</h2>
              <div className={styles.resumeCardContainer}>
                {experience.map(
                  ({
                    institution,
                    title,
                    location,
                    description,
                    startYear,
                    endYear,
                    url,
                  }) => {
                    return (
                      <ResumeItem
                        institution={institution}
                        title={title}
                        location={location}
                        description={description}
                        startYear={startYear}
                        endYear={endYear}
                        url={url}
                        id={ title + location }
                      />
                    );
                  }
                )}
              </div>
            </div>

            <div className={styles.subsection}>
              <h2 className={styles.subtitle}>Education</h2>
              <div className={styles.resumeCardContainer}>
                {education.map(
                  ({
                    institution,
                    title,
                    location,
                    description,
                    startYear,
                    endYear,
                    url,
                  }) => {
                    return (
                      <ResumeItem
                        institution={institution}
                        title={title}
                        location={location}
                        description={description}
                        startYear={startYear}
                        endYear={endYear}
                        url={url}
                      />
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </NavBar>
  );
}

export async function getStaticProps() {
  const dir = path.join(process.cwd(), "data");
  const data = JSON.parse(
    fs.readFileSync(path.join(dir, "resume.json"), "utf-8")
  );

  return {
    props: {
      education: data.education,
      experience: data.experience,
    },
  };
}

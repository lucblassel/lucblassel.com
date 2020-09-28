import Link from "next/link";
import NavBar from "../components/Navbar";
import NewHead from "../components/NewHead";
import Footer from "../components/Footer";
import styles from "../styles/404.module.css";
import getImage from "../lib/APODFetcher";

function Image() {
  
  const {data, error} = getImage();

  if (error) return <div>Sorry no picture for you... (failed to load)</div>
  if (!data) return <div>loading...</div>

  console.log(data);

  return (
    <div className={styles.imageContainer}>
      <figure>
        <img alt={data.title} src={data.url} title={data.explanation} />
        <figcaption>
          credit {data.copyright ? data.copyright : "NASA"}, {data.date}
        </figcaption>
      </figure>
    </div>
  );
}

export default function Custom404() {
  return (
    <>
      <NavBar>
        <NewHead>
          <title>Oops something went wrong...</title>
        </NewHead>
        <div className={styles.pageContainer}>
          <div className={styles.errorContainer}>
            <div className={styles.title}>
              <h1>Oops, this page wasn't found</h1>
              <h3>(404)</h3>
              <p>Here's a nice astronomy picture instead: </p>
            </div>
            <Image />
            <Link href="/">
              <a href="" className={styles.backButton}>
                Go home?
              </a>
            </Link>
          </div>
        </div>
        <Footer />
      </NavBar>
    </>
  );
}

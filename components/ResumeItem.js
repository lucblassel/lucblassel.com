import Markdown from "./Markdown";
import styles from "../styles/ResumeItem.module.css";

export default function ResumeItem({
  title,
  location,
  institution,
  description,
  startYear,
  endYear,
  url,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4 className={styles.title}>
          {title} @ <a href={url}>{institution}</a>
        </h4>
        <div className={styles.subheader}>
          <span className={styles.location}>{location}</span>
          <div className={styles.dates}>
            <span>{startYear}</span> - <span>{endYear}</span>
          </div>
        </div>
        <hr className={styles.divider} />
      </div>
      <div></div>

      <div className={styles.content}>
        <Markdown>{description}</Markdown>
      </div>
    </div>
  );
}

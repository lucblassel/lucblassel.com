import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styles from "../styles/Post.module.css";

export default function CodeBlock({ value, language }) {
  return (
    <div className={styles.codeBlock}>
      <SyntaxHighlighter language={language} style={coy}>
        {value}
      </SyntaxHighlighter>
    </div>
  );
}

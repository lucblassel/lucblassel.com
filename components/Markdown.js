import React from "react";
import ReactMarkdown from "react-markdown/with-html";
import RemarkMathPlugin from "remark-math";
import { BlockMath, InlineMath } from "react-katex";
import CodeBlock from "./CodeBlock";

const _mapProps = (props) => ({
  ...props,
  escapeHtml: false,
  plugins: [RemarkMathPlugin],
  renderers: {
    ...props.renderers,
    math: ({ value }) => <BlockMath>{value}</BlockMath>,
    inlineMath: ({ value }) => <InlineMath>{value}</InlineMath>,
    code: CodeBlock,
  },
});

const Markdown = (props) => <ReactMarkdown {..._mapProps(props)} />;

export default Markdown;

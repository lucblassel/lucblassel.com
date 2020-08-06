import fs from "fs";
import matter from "gray-matter";
import katex from "katex";

const TAGS = [
  [/\*\*(\S[^\*]*\S)\*\*/g, "<b>", "</b>"],
  [/\*(\S[^\*]*\S)\*/g, "<i>", "</i>"],
  [/^#{1}\s(.*)$/gm, "<h1>", "</h1>" ],
  [/^#{2}\s(.*)$/gm, "<h2>", "</h2>" ],
  [/^#{3}\s(.*)$/gm, "<h3>", "</h3>" ],
  [/^#{4}\s(.*)$/gm, "<h4>", "</h4>" ],
  [/^#{5}\s(.*)$/gm, "<h5>", "</h5>" ],
  [/^#{6}\s(.*)$/gm, "<h6>", "</h6>" ],
];

function parseList(content) {
    let regex = /((^\-.*\n)+)/gm
    return content.replace(regex, "\n<ul>\n$1</ul>\n")
}

function parseListItems(content) {
    let regex = /^\-\s+(.*)$/gm
    return content.replace(regex, "<li>$1</li>")
}

function parseLinks(content) {
    let regex = /\[(.*)\]\((.*)\)/gm
    return content.replace(regex, "<a href=\"$2\">$1</a>")
}

function parseParagraphs(content) {
    let regex = /^(\w.*)  $/gm
    return content.replace(regex, "<p>$1</p>")
}

function parseLineBreaks(content) {
    let regex = /  $/gm
    return content.replace(regex, "</br>")
}

function parseInlineMath(content) {
    let regex = /\$([^$]*)\$/gm
    return content.replace(
        regex, function(match, group) {
            console.log(typeof group)
            return katex.renderToString(group, {throwOnError: true})
        })
}

export default function parseMarkdown(filepath) {
  let text = fs.readFileSync(filepath, "utf-8");
  let matterContent = matter(text);

  let content = matterContent.content;

  for (const [regex, open, close] of TAGS) {
    content = content.replace(regex, open + "$1" + close);
  }

  content = parseList(content)
  content = parseListItems(content)
  content = parseLinks(content)
  content = parseInlineMath(content)
//   content = parseParagraphs(content)
//   content = parseLineBreaks(content)

  console.log(content);
}

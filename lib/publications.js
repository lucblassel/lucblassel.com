import fs from "fs";
import path from "path";
import matter from "gray-matter";

const summaryDirectory = path.join(process.cwd(), "publications");

function parseFile(filename) {
  let slug = filename.replace(/\.(md|markdown)$/, "");

  let fileContents = fs.readFileSync(path.join(summaryDirectory, filename));
  let fileData = matter(fileContents);

  let authors = [...fileData.data.authors]
  let last = authors.pop()

  return {
    id: slug,
    date: `${fileData.data.date}`,
    title: fileData.data.title,
    abstract: fileData.content,
    url: fileData.data.url,
    authors: `${authors.join(", ")} & ${last}`,
  };
}

export function getSortedData() {
  const fileNames = fs.readdirSync(summaryDirectory);
  const data = fileNames.map((filename) => {
    return parseFile(filename);
  });
  return data.sort((a, b) => {
    let aDate = new Date(a.date);
    let bDate = new Date(b.date);
    return aDate < bDate ? 1 : -1;
  });
}

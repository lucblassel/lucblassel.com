import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ENV = process.env.BUILD_ENV;
const postDirectory = path.join(process.cwd(), "posts");

function parseFile(filename) {
  let slug = filename.replace(/\.(md|markdown)$/, "");

  let fileContents = fs.readFileSync(path.join(postDirectory, filename));
  let fileData = matter(fileContents);

  if (fileData.data.draft && ENV != "development") {
    return null;
  }

  let re = new RegExp(
    "(?<header>(.|\n)*)" + fileData.data["excerpt_separator"] + "(.|\n)*"
  );
  const match = fileData.content.match(re);
  let excerpt = match != null ? match.groups.header : "";

  return {
    id: slug,
    filename: filename,
    date: `${fileData.data.date}`,
    title: fileData.data.title,
    excerpt: excerpt,
  };
}

export function getSortedPostData() {
  const fileNames = fs.readdirSync(postDirectory);
  const postData = fileNames
    .map((filename) => {
      return parseFile(filename);
    })
    .filter((el) => {
      return el != null;
    });
  return postData.sort((a, b) => {
    let aDate = new Date(a.date);
    let bDate = new Date(b.date);
    return aDate < bDate ? 1 : -1;
  });
}

export function getAllIds() {
  const fileNames = fs.readdirSync(postDirectory);
  return fileNames.map((filename) => {
    return {
      params: {
        id: filename.replace(/\.(md|markdown)/, ""),
      },
    };
  });
}

export async function getPostData(id) {
  let filepath = path.join(postDirectory, `${id}.markdown`);
  let fileContents = fs.readFileSync(filepath, "utf-8");
  let fileData = matter(fileContents);

  return {
    id: id,
    date: `${fileData.data.date}`,
    title: fileData.data.title,
    content: fileData.content,
  };
}

import useSWR from "swr";
import fetch from "unfetch";

function generateRandomDate() {
  const beginning = new Date("June 16, 1995").getTime();
  const now = new Date().getTime();
  let date = new Date();
  date.setTime(beginning + Math.random() * (now - beginning));
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

const NASA_KEY = process.env.NEXT_PUBLIC_NASA_KEY;
const DATE = generateRandomDate();
const URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&date=${DATE}`;
console.log("here", URL)

export default function getImage() {
    let fetcher = (url) => fetch(url).then((r) => r.json());
    return useSWR(URL, fetcher);
}
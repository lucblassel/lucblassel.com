import { format } from "date-fns";

export default function DateBlock({ dateString }) {
  try {
    const date = new Date(dateString);
    return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
  } catch {
    return <div></div>;
  }
}

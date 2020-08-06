import { format } from "date-fns";

export default function DateBlock({ dateString }) {
  if (dateString == undefined) {
    return <div>undefined</div>
  }
  const date = new Date(dateString)
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}

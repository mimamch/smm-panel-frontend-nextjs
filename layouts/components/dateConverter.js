export default function dateConverter(props) {
  let date = new Date(props);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
    timeZone: "Asia/Jakarta",
  }).format(date);
  return date.toLocaleDateString();
}

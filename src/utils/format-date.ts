export function formatDate(dateAsString: string): string {
  const date = new Date(dateAsString);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);

  return formattedDate;
}

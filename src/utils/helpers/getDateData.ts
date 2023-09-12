export function getDateData(dateObject: Date) {
  const day = dateObject.getDay();
  const month = dateObject.getMonth();
  const year = dateObject.getFullYear();
  const date = dateObject.getDate();

  return { day, month, year, date };
}

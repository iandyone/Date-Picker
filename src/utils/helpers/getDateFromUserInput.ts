export function getDateFromUserInput(value: string, minDate: Date, maxDate: Date): Date {
  let isValidDate = false;

  if (value.length === 10) {
    const [day, month, year] = value.split('/').map(Number);
    const userDate = new Date(year, month - 1, day);

    const newDateYear = userDate.getFullYear();
    const newDateMonth = userDate.getMonth() + 1;
    const newDateDay = userDate.getDate();

    const isDateInCalendarScope = userDate <= maxDate && userDate >= minDate;

    isValidDate =
      newDateDay === day && newDateMonth === month && newDateYear === year && isDateInCalendarScope;

    return isValidDate && userDate;
  }
}

import { getDateData } from './getDateData';

export function getDaysAmountInAMonth(date: Date) {
  const { month, year } = getDateData(date);
  const nextMonth = new Date(year, month + 1);
  nextMonth.setMinutes(-1);
  return nextMonth.getDate();
}

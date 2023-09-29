import { WeekDaysProps } from '@appTypes';
import { WeekDays } from '@appTypes/enums';

export function getDateData(dateObject: Date) {
  const day = dateObject.getDay();
  const month = dateObject.getMonth();
  const year = dateObject.getFullYear();
  const date = dateObject.getDate();

  return { day, month, year, date };
}

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

export function getDaysAmountInAMonth(date: Date) {
  const { month, year } = getDateData(date);
  const nextMonth = new Date(year, month + 1);

  nextMonth.setMinutes(-1);

  return nextMonth.getDate();
}

export function getFixedValue(value: string) {
  return value.length < 2 ? `0${value}` : value;
}

export function getWeekDays({ format = 'short', start = WeekDays.MONDAY }: WeekDaysProps) {
  let days: string[] = Object.values(WeekDays);

  if (format === 'short') {
    days = days.map((day: string) => day.slice(0, 2).toUpperCase());
  }

  if (start === WeekDays.SUNDAY) {
    const newWeekStart = days.pop();
    days.unshift(newWeekStart);
  }

  return days;
}

import { WeekDays, WeekStart } from '@appTypes/index';

type WeekDayFormat = 'full' | 'short';

interface WeekDaysProps {
  format?: WeekDayFormat;
  start?: WeekStart;
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

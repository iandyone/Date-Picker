import { Controller } from 'src/services/Controller';

export type subscriber = () => void;

export type WeekStart = WeekDays.MONDAY | WeekDays.SUNDAY;

export enum Months {
  JANUARY,
  FEBRUARY,
  MARCH,
  APRIL,
  MAY,
  JUNE,
  JULY,
  AUGUST,
  SEPTEMBER,
  OCTOBER,
  NOVEMBER,
  DECEMBER,
}

export enum WeekDays {
  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',
  THIRSDAY = 'Thirsday',
  FRIDAY = 'Friday',
  SATURDAY = 'Saturday',
  SUNDAY = 'Sunday',
}

export interface DateCellItem {
  day: number;
  month: number;
  year: number;
}

export interface ICalendar {
  getCurrentDate: () => string;
  switchMonthNext: () => void;
  switchMonthPrev: () => void;
  getCurrentMonthDays: (numberOfDays: number) => DateCellItem[];
  getFirstMonthDateWeekDay: () => {
    year: number;
    month: number;
    dayOfTheWeek: number;
    startWeekCoefficient: number;
  };

  getPreviousMonthDays: () => DateCellItem[];
  getNextMonthDays: () => DateCellItem[];
  getCalendarDays: () => DateCellItem[];
}

export interface IRenderDataObserver {
  subscribe(sub: subscriber): void;
  unsubscribe(sub: subscriber): void;
  notify(): void;
}

export interface IDecorator {
  datePicker: boolean;
  withDecorator?: boolean;
}

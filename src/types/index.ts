import { FormEvent } from 'react';

export type handler = () => void;

export type subscriber = handler;

export type WeekStart = WeekDays.MONDAY | WeekDays.SUNDAY;

export type DateCellItem = IDateCellItemDays | IDateCellItemMonths | IDateCellItemYears;

export type DateHandler = (date: Date, viewType?: ViewType) => void;

export type ViewType = 'month' | 'year' | 'decade';

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

export interface IDateCellItemDays {
  day: number;
  month: number;
  year: number;
}

export interface IDateCellItemMonths {
  day?: number;
  month?: number;
  year: number;
}
export interface IDateCellItemYears {
  day?: number;
  month?: number;
  year: number;
}

export interface ICalendar {
  getCurrentDate: () => string;
  switchDateNext: handler;
  switchDatePrev: handler;
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
  datePicker?: boolean;
  view?: ViewType;
}

export interface IRenderData {
  currentDate: string;
  currentMonth: number;
  weekDays: string[];
  calendarItems: DateCellItem[];
  getPrevDate: handler;
  getNextDate: handler;
  setUserDate: (e: FormEvent<HTMLFormElement>, date: Date) => void;
  clendarItemHandler: DateHandler;
  titleHandler: handler;
  viewType: ViewType;
}

import { Controller } from '@services/Controller';
import { FormEvent, MouseEvent } from 'react';

export type ID = number | string;

export type handler = () => void;

export type subscriber = handler;

export type WeekStart = WeekDays.MONDAY | WeekDays.SUNDAY;

type handlerContext = (e: MouseEvent<HTMLElement>) => void;

export type DateCellItem = IDateCellItemDays | IDateCellItemMonths | IDateCellItemYears;

export type DateHandler = (date: Date, viewType?: ViewType) => void;

export type ViewType = 'day' | 'month' | 'year' | 'decade';

export type DecoratorBaseClass = typeof Controller;

export type SubmitHandler = (date: Date) => void;

export interface ITodoList {
  [key: string]: string[];
}

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
  handlerOnContextPrevDate: handlerContext;
  handlerOnContextNextDate: handlerContext;
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
  weekStart?: WeekStart;
  datePicker?: boolean;
  view?: ViewType;
  todos?: boolean;
  minDate?: Date;
  maxDate?: Date;
}

export interface IRenderData {
  currentDate: Date;
  currentDateString: string;
  currentMonth: number;
  weekDays: string[];
  calendarItems: DateCellItem[];
  getPrevDate: handler;
  getNextDate: handler;
  setUserDate: SubmitHandler;
  clendarItemHandler: DateHandler;
  titleHandler: handler;
  viewType: ViewType;
  withTodos: boolean;
  minDate: Date;
  maxDate: Date;

  handlerOnContextPrevDate: handlerContext;
  handlerOnContextNextDate: handlerContext;
}

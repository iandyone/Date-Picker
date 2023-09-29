import {
  handler,
  handlerContext,
  DateCellItem,
  SubmitHandler,
  subscriber,
  WeekStart,
  ViewType,
  CustomTheme,
  DateHandler,
  handlerRange,
  WeekDayFormat,
} from './types';

export interface IFont {
  size?: string;
  bold?: number;
  regular?: number;
  medium?: number;
  semibold?: number;
  family?: string;
}

export interface IColor {
  text?: string;
  otherDate?: string;
  border?: string;
  active?: string;
  rangeStart?: string;
  rangeEnd?: string;
  inRange?: string;
  holiday?: string;
  error?: string;
  textLight?: string;
  hover?: string;
}

export interface ISpace {
  borderRadius?: string;
  inputPadding?: string;
  loaderSize?: string;
  padding?: string;
  height?: string;
  width?: string;
}
export interface IAnimation {
  transition?: string;
  transformActive?: string;
}

export interface ITodoList {
  [key: string]: string[];
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
  getWeekDays: ({}: WeekDaysProps) => string[];
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
  handlerOnContextCalendarItem: handler;
  handlerOnClickCalendarItem: SubmitHandler;
}

export interface IRenderDataObserver {
  subscribe(sub: subscriber): void;
  unsubscribe(sub: subscriber): void;
  notify(): void;
}

export interface ITheme {
  font: IFont;
  colors: IColor;
  spaces: ISpace;
  animation: IAnimation;
}

export interface IDecorator {
  weekStart?: WeekStart;
  datePicker?: boolean;
  view?: ViewType;
  todos?: boolean;
  minDate?: Date;
  maxDate?: Date;
  customTheme?: CustomTheme;
  range?: boolean;
  noWeekends?: boolean;
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
  theme?: CustomTheme;
  rangeStart?: Date;
  rangeEnd?: Date;
  withoutHolidays: boolean;

  handlerOnContextPrevDate: handlerContext;
  handlerOnContextNextDate: handlerContext;
  handlerOnDateRange: handlerRange;
  hadnlerOnClickClearDateRange: handler;
  handlerOnContextCalendarItem: handler;
}

export interface WeekDaysProps {
  format?: WeekDayFormat;
  start?: WeekStart;
}

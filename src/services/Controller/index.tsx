import { DateCellItem, IRenderData, Months, ViewType, WeekDays, WeekStart } from '@appTypes/index';
import { getWeekDays } from '@utils/helpers/getWeekDays';
import { getDaysAmountInAMonth } from '@utils/helpers/getDaysAmountInAMonth';
import { getDateData } from '@utils/helpers/getDateData';
import { renderDataObserver } from '@observers/renderData';
import { IController } from './types';
import { MAX_DATE, MIN_DATE } from '@constants/variables';
import { MouseEvent } from 'react';

export interface IControllerState {
  date: Date;
}

export class Controller implements IController {
  visibleCellsAmount = 42;
  weekStart: WeekStart;
  date: Date;
  minDate: Date;
  maxDate: Date;
  viewType: ViewType;
  withTodosDecorator: boolean;
  withViewDecorator: boolean;
  withWeekStartDecorator: boolean;
  withLimitDatesDecorator: boolean;

  constructor(
    viewType: ViewType = 'month',
    weekStart: WeekStart = WeekDays.MONDAY,
    minDate: Date = MIN_DATE,
    maxDate: Date = MAX_DATE,
  ) {
    this.date = new Date();
    this.viewType = viewType;
    this.weekStart = weekStart;
    this.minDate = minDate;
    this.maxDate = maxDate;
    this.switchDateNext = this.switchDateNext.bind(this);
    this.switchDatePrev = this.switchDatePrev.bind(this);
    this.getCalendarDays = this.getCalendarDays.bind(this);
    this.handlerOnClickTitle = this.handlerOnClickTitle.bind(this);
    this.handlerOnSubmitDateInput = this.handlerOnSubmitDateInput.bind(this);
    this.handlerOnClickCalendarItem = this.handlerOnClickCalendarItem.bind(this);
    this.handlerOnContextPrevDate = this.handlerOnContextPrevDate.bind(this);
    this.handlerOnContextNextDate = this.handlerOnContextNextDate.bind(this);
  }

  getCurrentDate = () => {
    const date = this.date;
    const month = Months[date.getMonth()].toLowerCase();
    const year = date.getFullYear();

    return `${month[0].toUpperCase() + month.slice(1)} ${year}`;
  };

  switchDateNext() {
    const date = this.date;
    const newDate = new Date(date.toDateString());
    newDate.setMonth(date.getMonth() + 1);

    if (newDate <= this.maxDate) {
      date.setMonth(date.getMonth() + 1);
    }

    renderDataObserver.notify();
  }

  switchDatePrev() {
    const date = this.date;
    const newDate = new Date(date.toDateString());
    newDate.setMonth(date.getMonth() - 1);

    if (newDate >= this.minDate) {
      date.setMonth(date.getMonth() - 1);
    }

    renderDataObserver.notify();
  }

  handlerOnContextPrevDate(e: MouseEvent<HTMLElement>) {
    e.preventDefault();
    this.date = new Date(this.minDate);
    renderDataObserver.notify();
  }

  handlerOnContextNextDate(e: MouseEvent<HTMLElement>) {
    e.preventDefault();
    this.date = new Date(this.maxDate);
    renderDataObserver.notify();
  }

  getCurrentMonthDays = (numberOfDays: number) => {
    const date = this.date;
    const year = date.getFullYear();
    const month = date.getMonth();
    const days: DateCellItem[] = [];

    for (let day = 1; day <= numberOfDays; ++day) {
      days.push({
        year,
        month,
        day,
      });
    }

    return days;
  };

  getFirstMonthDateWeekDay = () => {
    const { month, year } = getDateData(this.date);
    const startWeekCoefficient = this.weekStart === WeekDays.MONDAY ? 0 : 1;
    const currentMonthFirstDay = new Date(year, month, 1);
    const dayOfTheWeek = currentMonthFirstDay.getDay(); // день недели первого числа месяца

    return { year, month, dayOfTheWeek, startWeekCoefficient };
  };

  getPreviousMonthDays = () => {
    const { month, year, dayOfTheWeek, startWeekCoefficient } = this.getFirstMonthDateWeekDay();
    const previousMonthCeilsAmount =
      dayOfTheWeek === 0 ? 6 + startWeekCoefficient : dayOfTheWeek - 1 + startWeekCoefficient; // сколько ячеек нужно заполнить данными из предыдущего месяца
    const getDaysOfPrevMonth = getDaysAmountInAMonth(new Date(year, month - 1)); // все числа предыдущего месяца

    const dateCeils: DateCellItem[] = [];

    const [cellYear, cellMonth] = month === 0 ? [year - 1, 11] : [year, month - 1];
    for (let i = 0; i < previousMonthCeilsAmount; ++i) {
      dateCeils.push({
        year: cellYear,
        month: cellMonth,
        day: getDaysOfPrevMonth - i,
      });
    }

    return dateCeils.reverse();
  };

  getNextMonthDays = () => {
    const { month, year, dayOfTheWeek, startWeekCoefficient } = this.getFirstMonthDateWeekDay();
    const previousMonthCeilsAmount = dayOfTheWeek === 0 ? 6 : dayOfTheWeek - 1; // сколько ячеек нужно заполнить данными из предыдущего месяца

    const daysAmount = getDaysAmountInAMonth(this.date); // сколько дней текущем месяце
    const nextMonthCeilsAmount =
      this.visibleCellsAmount - daysAmount - previousMonthCeilsAmount - startWeekCoefficient; // сколько ячеек нужно заполнить данными из нового месяца

    const [cellYear, cellMonth] = month === 11 ? [year + 1, 0] : [year, month + 1];
    const dateCeils: DateCellItem[] = [];

    for (let day = 1; day <= nextMonthCeilsAmount; ++day) {
      dateCeils.push({
        year: cellYear,
        month: cellMonth,
        day,
      });
    }
    return dateCeils;
  };

  getCalendarDays() {
    const currentMonthDaysAmount = getDaysAmountInAMonth(this.date);

    const prevMonthDays = this.getPreviousMonthDays();
    const currentMonthDays = this.getCurrentMonthDays(currentMonthDaysAmount);
    const nextMonthDays = this.getNextMonthDays();

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  }

  handlerOnSubmitDateInput(date: Date) {
    this.date = date;
    this.viewType = this.withTodosDecorator ? 'day' : 'month';
    renderDataObserver.notify();
  }

  handlerOnClickCalendarItem(date: Date) {
    const newDateYear = date.getFullYear();
    const isNewDateInCalendarRange =
      newDateYear <= this.maxDate.getFullYear() && newDateYear >= this.minDate.getFullYear();

    if (isNewDateInCalendarRange) {
      this.date = date;
      const view = this.viewType;

      if (view === 'decade') {
        this.viewType = 'year';
      } else if (view === 'year') {
        this.viewType = 'month';
      }

      renderDataObserver.notify();
    }
  }

  handlerOnClickTitle() {
    if (this.viewType) {
      const view = this.viewType;

      if (view === 'day') {
        this.viewType = 'month';
      } else if (view === 'month' && this.withViewDecorator) {
        this.viewType = 'year';
      } else if (view === 'year') {
        this.viewType = 'decade';
      }

      renderDataObserver.notify();
    }
  }

  getRenderData = (): IRenderData => {
    const { month: currentMonth } = getDateData(this.date);

    const currentDateString = this.getCurrentDate();
    const currentDate = this.date;
    const weekDays = getWeekDays({ start: this.weekStart });
    const calendarItems = this.getCalendarDays();

    const getPrevDate = this.switchDatePrev;
    const getNextDate = this.switchDateNext;
    const setUserDate = this.handlerOnSubmitDateInput;

    const clendarItemHandler = this.handlerOnClickCalendarItem;
    const titleHandler = this.handlerOnClickTitle;

    const handlerOnContextPrevDate = this.handlerOnContextPrevDate;
    const handlerOnContextNextDate = this.handlerOnContextNextDate;

    const viewType = this.viewType;
    const withTodos = this.withTodosDecorator;

    const minDate = this.minDate;
    const maxDate = this.maxDate;

    return {
      currentDate,
      currentDateString,
      currentMonth,
      weekDays,
      calendarItems,
      getPrevDate,
      getNextDate,
      setUserDate,
      clendarItemHandler,
      titleHandler,
      viewType,
      withTodos,
      handlerOnContextPrevDate,
      handlerOnContextNextDate,
      minDate,
      maxDate,
    };
  };
}

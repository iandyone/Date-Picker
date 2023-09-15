import { DateCellItem, Months, WeekDays, WeekStart } from '@appTypes/index';
import { getWeekDays } from '@utils/helpers/getWeekDays';
import { getDaysAmountInAMonth } from '@utils/helpers/getDaysAmountInAMonth';
import { getDateData } from '@utils/helpers/getDateData';
import { renderDataObserver } from '@observers/renderData';
import { IController, IRenderData } from './types';
import { FormEvent } from 'react';

export interface IControllerState {
  date: Date;
}

export class Controller implements IController {
  visibleCellsAmount = 42;
  weekStart = WeekDays.MONDAY;
  date: Date;

  constructor() {
    this.date = new Date();
    this.switchMonthNext = this.switchMonthNext.bind(this);
    this.handlerOnSubmitDateInput = this.handlerOnSubmitDateInput.bind(this);
  }

  getCurrentDate = () => {
    const date = this.date;
    const month = Months[date.getMonth()].toLowerCase();
    const year = date.getFullYear();

    return `${month[0].toUpperCase() + month.slice(1)} ${year}`;
  };

  switchMonthNext() {
    const date = this.date;
    date.setMonth(date.getMonth() + 1);
    renderDataObserver.notify();
  }

  switchMonthPrev = () => {
    const date = this.date;
    date.setMonth(date.getMonth() - 1);
    renderDataObserver.notify();
  };

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

  getCalendarDays = () => {
    const currentMonthDaysAmount = getDaysAmountInAMonth(this.date);

    const prevMonthDays = this.getPreviousMonthDays();
    const currentMonthDays = this.getCurrentMonthDays(currentMonthDaysAmount);
    const nextMonthDays = this.getNextMonthDays();

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  };

  handlerOnSubmitDateInput(e: FormEvent<HTMLFormElement>, date: Date) {
    e.preventDefault();
    this.date = date;
    renderDataObserver.notify();
  }

  getRenderData = (weekStart: WeekStart): IRenderData => {
    this.weekStart = weekStart;
    const { month: currentMonth } = getDateData(this.date);

    const currentDate = this.getCurrentDate();
    const weekDays = getWeekDays({ start: weekStart });
    const calendarDays = this.getCalendarDays();

    const getPrevMonth = this.switchMonthPrev;
    const getNextMonth = this.switchMonthNext;
    const setUserDate = this.handlerOnSubmitDateInput;

    return {
      currentDate,
      currentMonth,
      weekDays,
      calendarDays,
      getPrevMonth,
      getNextMonth,
      setUserDate,
    };
  };
}

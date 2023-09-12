import { Component } from 'react';
import arrowLeftIcon from '@assets/arrow-left.png';
import arrowRightIcon from '@assets/arrow-right.png';

import { ThemeProvider } from 'styled-components';
import { theme } from '@constants/theme';
import {
  Wrapper,
  Navigation,
  Month,
  DateButton,
  Week,
  WeekDay,
  Days,
  Day,
  Body,
  CurrentMonthDay,
  CurrentDay,
  GlobalStyles,
} from '@components/Calendar/styled';
import { ICalendarProps, ICalendarState } from './types';
import { DateCellItem, Months, WeekDays } from '@appTypes/index';
import { getWeekDays } from '@utils/helpers/getWeekDays';
import { getDaysAmountInAMonth } from '@utils/helpers/getDaysAmountInAMonth';
import { getDateData } from '@utils/helpers/getDateData';

export class Calendar extends Component<ICalendarProps, ICalendarState> {
  private visibleCellsAmount = 42;

  constructor(props: ICalendarProps) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount(): void {}

  getCurrentDate = () => {
    const { date } = this.state;
    const month = Months[date.getMonth()].toLowerCase();
    const year = date.getFullYear();

    return `${month[0].toUpperCase() + month.slice(1)} ${year}`;
  };

  switchMonthNext = () => {
    const date = this.state.date;
    date.setMonth(date.getMonth() + 1);
    this.setState((prevState) => ({ ...prevState, date }));
  };

  switchMonthPrev = () => {
    const date = this.state.date;
    date.setMonth(date.getMonth() - 1);
    this.setState((prevState) => ({ ...prevState, date }));
  };

  getCurrentMonthDays = (numberOfDays: number) => {
    const { date } = this.state;
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
    const { month, year } = getDateData(this.state.date);
    const startWeekCoefficient = this.props.weekStart === WeekDays.MONDAY ? 0 : 1;
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

    const daysAmount = getDaysAmountInAMonth(this.state.date); // сколько дней текущем месяце
    const nextMonthCeilsAmount =
      this.visibleCellsAmount - daysAmount - previousMonthCeilsAmount - startWeekCoefficient; // сколько ячеек нужно заполнить данными из нового месяца

    const [cellYear, cellMonth] = month === 11 ? [year + 1, 11] : [year, month + 1];
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
    const currentMonthDaysAmount = getDaysAmountInAMonth(this.state.date);

    const prevMonthDays = this.getPreviousMonthDays();
    const currentMonthDays = this.getCurrentMonthDays(currentMonthDaysAmount);
    const nextMonthDays = this.getNextMonthDays();

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  };

  render() {
    const { weekStart } = this.props;
    const { date } = this.state;
    const { month: currentMonth } = getDateData(date);

    const current = this.getCurrentDate();
    const weekDays = getWeekDays({ start: weekStart });
    const calendarDays = this.getCalendarDays();

    const { date: todayDate, month: todayMonth, year: todayYear } = getDateData(new Date());

    // console.log(calendarDays);
    // console.log(WeekDays.MONDAY);

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Wrapper>
          <Navigation>
            <DateButton src={arrowLeftIcon} onClick={this.switchMonthPrev} />
            <Month>{current}</Month>
            <DateButton src={arrowRightIcon} onClick={this.switchMonthNext} />
          </Navigation>
          <Body>
            <Week>
              {weekDays.map((day) => (
                <WeekDay key={day}>{day}</WeekDay>
              ))}
            </Week>
            <Days>
              {calendarDays.map(({ day, month, year }, index) => {
                let Component;

                if (day === todayDate && month === todayMonth && year === todayYear) Component = CurrentDay;
                else if (month === currentMonth) Component = Day;
                else Component = CurrentMonthDay;

                return <Component key={String(index)}>{day}</Component>;
              })}
            </Days>
          </Body>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

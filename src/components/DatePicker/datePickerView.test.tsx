import { Months, WeekDays, WeekDaysID } from '@appTypes/index';
import { MAX_DATE, MIN_DATE } from '@constants/variables';
import { weekendDecorator } from '@decorators/weekends';
import { weekstartDecorator } from '@decorators/weekstart';
import { Controller } from '@services/Controller';
import { fireEvent, render, screen } from '@testing-library/react';
import { getDateData } from '@utils/helpers/getDateData';

import { DatePicker } from '.';

function getTitleString(month: string, year: number | string) {
  return `${month[0] + month.slice(1).toLocaleLowerCase()} ${year}`;
}

describe('Date picker view test', () => {
  it('should be rendered on the page', () => {
    render(<DatePicker />);

    const datePicker = screen.getByTestId('date-picker');

    expect(datePicker).toBeInTheDocument();
  });

  it('title should display the current date', () => {
    render(<DatePicker />);

    const title = screen.getByTestId('current-date');
    expect(title).toBeInTheDocument();

    const { month, year } = getDateData(new Date());
    const monthValue = String(Months[month]);
    const expextedTitle = getTitleString(monthValue, year);
    expect(title).toHaveTextContent(expextedTitle);
  });

  it('should switch the prev and the next months', () => {
    render(<DatePicker />);

    const title = screen.getByTestId('current-date');
    expect(title).toBeInTheDocument();

    const { month, year } = getDateData(new Date());

    const prevDateButton = screen.getByTestId('prev-date-button');
    const nextDateButton = screen.getByTestId('next-date-button');
    expect(prevDateButton).toBeInTheDocument();
    expect(nextDateButton).toBeInTheDocument();

    let expextedTitle = title.textContent;

    fireEvent.click(prevDateButton);
    expextedTitle = getTitleString(String(Months[month - 1]), year);
    expect(title).toHaveTextContent(expextedTitle);

    fireEvent.click(nextDateButton);
    expextedTitle = getTitleString(String(Months[month]), year);
    expect(title).toHaveTextContent(expextedTitle);
  });

  it('should switch the minimal and maximum date', () => {
    render(<DatePicker />);

    const title = screen.getByTestId('current-date');
    expect(title).toBeInTheDocument();

    const prevDateButton = screen.getByTestId('prev-date-button');
    const nextDateButton = screen.getByTestId('next-date-button');
    expect(prevDateButton).toBeInTheDocument();
    expect(nextDateButton).toBeInTheDocument();

    let expextedTitle = title.textContent;

    fireEvent.contextMenu(prevDateButton);
    const { month: monthMin, year: yearMin } = getDateData(MIN_DATE);
    expextedTitle = getTitleString(String(Months[monthMin]), yearMin);
    expect(title).toHaveTextContent(expextedTitle);

    fireEvent.contextMenu(nextDateButton);
    const { month: monthMax, year: yearMax } = getDateData(MAX_DATE);
    expextedTitle = getTitleString(String(Months[monthMax]), yearMax);
    expect(title).toHaveTextContent(expextedTitle);
  });

  it('should switch the date picker view by clicking on a day', () => {
    render(<DatePicker />);

    const title = screen.getByTestId('current-date');
    expect(title).toBeInTheDocument();

    const { month, year } = getDateData(new Date());
    const days = screen.getAllByTestId('ceil-day');
    const testDay = days.find((day) => day.textContent === '13');

    fireEvent.click(testDay);
    let extectedTitle = getTitleString(String(Months[month]), year);
    extectedTitle = `13 ${extectedTitle}`;
    expect(title).toHaveTextContent(extectedTitle);
  });

  it('limitDate decorator should update the date picker min and max dates', () => {
    const newMinDate = new Date(2020, 13, 8);
    const newMaxDate = new Date(2025, 13, 8);

    render(<DatePicker minDate={newMinDate} maxDate={newMaxDate} />);

    const prevDateButton = screen.getByTestId('prev-date-button');
    const nextDateButton = screen.getByTestId('next-date-button');
    expect(prevDateButton).toBeInTheDocument();
    expect(nextDateButton).toBeInTheDocument();

    let expextedTitle: string;
    const title = screen.getByTestId('current-date');

    fireEvent.contextMenu(prevDateButton);
    const { month: monthMin, year: yearMin } = getDateData(newMinDate);
    expextedTitle = getTitleString(String(Months[monthMin]), yearMin);
    expect(title).toHaveTextContent(expextedTitle);

    fireEvent.contextMenu(nextDateButton);
    const { month: monthMax, year: yearMax } = getDateData(newMaxDate);
    expextedTitle = getTitleString(String(Months[monthMax]), yearMax);
    expect(title).toHaveTextContent(expextedTitle);
  });

  it('range decorator should add date range with two date inputs', () => {
    render(<DatePicker range={true} />);

    const rangeInputStart = screen.getByTestId('range-input-start');
    const rangeInputEnd = screen.getByTestId('range-input-end');
    const clearButton = screen.getByTestId('range-clear-button');

    expect(rangeInputStart).toBeInTheDocument();
    expect(rangeInputEnd).toBeInTheDocument();
    expect(clearButton).toBeInTheDocument();
  });

  it('todos decorator should add todos to any day', () => {
    render(<DatePicker todos={true} />);

    const title = screen.getByTestId('current-date');
    expect(title).toBeInTheDocument();

    const { month, year } = getDateData(new Date());
    const days = screen.getAllByTestId('ceil-day');
    const testDay = days.find((day) => day.textContent === '13');

    fireEvent.click(testDay);
    let extectedTitle = getTitleString(String(Months[month]), year);
    extectedTitle = `13 ${extectedTitle}`;
    expect(title).toHaveTextContent(extectedTitle);

    const todoComponent = screen.getByTestId('todo-component');
    const todoList = screen.getByTestId('todo-list');
    const todoInput = screen.getByTestId('todo-input');

    expect(todoComponent).toBeInTheDocument();
    expect(todoList).toBeInTheDocument();
    expect(todoInput).toBeInTheDocument();
  });

  it('view decorator should switch the date picker view', () => {
    let Component = render(<DatePicker view='month' />);
    expect(Component.getByTestId('day-view')).toBeInTheDocument();

    Component = render(<DatePicker view='year' />);
    expect(Component.getByTestId('month-view')).toBeInTheDocument();

    Component = render(<DatePicker view='decade' />);
    expect(Component.getByTestId('year-view')).toBeInTheDocument();
  });

  it('click on current date title should chenge the date picker view', () => {
    render(<DatePicker view='day' />);

    const title = screen.getByTestId('current-date');
    expect(title).toBeInTheDocument();

    fireEvent.click(title);
    expect(screen.getByTestId('day-view')).toBeInTheDocument();

    fireEvent.click(title);
    expect(screen.getByTestId('month-view')).toBeInTheDocument();

    fireEvent.click(title);
    expect(screen.getByTestId('year-view')).toBeInTheDocument();
  });

  it('weekends decorator should hide weekends', () => {
    render(<DatePicker noWeekends={true} />);

    const controller = weekendDecorator(Controller);
    const data = new controller().getCalendarDays();

    data.forEach(({ day, month, year }) => {
      const date = new Date(year, month, day).getDay();
      expect(date).not.toBe(WeekDaysID.SUNDAY);
      expect(date).not.toBe(WeekDaysID.SATURDAY);
    });
  });

  it('weekstart decorator should set the start of the week', () => {
    const Component = render(<DatePicker weekStart={WeekDays.SUNDAY} />);
    const controller = weekstartDecorator(Controller, WeekDays.SUNDAY);

    const weekDays = Component.getAllByTestId('week-day');
    const controllerWeekDays = new controller().getWeekDays({ start: WeekDays.SUNDAY });

    expect(weekDays[0]).toHaveTextContent('SU');
    expect(controllerWeekDays[0]).toEqual('SU');
  });
});

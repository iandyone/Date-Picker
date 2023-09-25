import { CustomTheme, WeekDays } from '@appTypes/index';
import { MAX_DATE, MIN_DATE } from '@constants/variables';
import { limitDatestDecorator } from '@decorators/limitDates';
import { rangeDecorator } from '@decorators/range';
import { themeDecorator } from '@decorators/theme';
import { todoDecorator } from '@decorators/todos';
import { viewDecorator } from '@decorators/view';
import { weekendDecorator } from '@decorators/weekends';
import { weekstartDecorator } from '@decorators/weekStart';
import { Controller } from '@services/Controller';
import { getDateData } from '@utils/helpers/getDateData';

describe('Date picker controller test', () => {
  it('should have default configuration with no decorators', () => {
    const ControllerClass = Controller;
    const controllerInstance = new ControllerClass();
    const {
      date,
      minDate,
      maxDate,
      customTheme,
      viewType,
      weekStart,
      withLimitDatesDecorator,
      withRangeDecorator,
      withThemeDecorator,
      withTodosDecorator,
      withViewDecorator,
      withweekstartDecorator,
      withWeekendDecorator,
      rangeStart,
      rangeEnd,
    } = controllerInstance;

    expect(getDateData(date)).toEqual(getDateData(new Date()));
    expect(viewType).toEqual('month');
    expect(minDate).toEqual(MIN_DATE);
    expect(maxDate).toEqual(MAX_DATE);
    expect(weekStart).toEqual(WeekDays.MONDAY);
    expect(rangeEnd).toEqual(undefined);
    expect(rangeStart).toEqual(undefined);
    expect(customTheme).toEqual(undefined);
    expect(withViewDecorator).toEqual(undefined);
    expect(withRangeDecorator).toEqual(undefined);
    expect(withThemeDecorator).toEqual(undefined);
    expect(withTodosDecorator).toEqual(undefined);
    expect(withWeekendDecorator).toEqual(undefined);
    expect(withweekstartDecorator).toEqual(undefined);
    expect(withLimitDatesDecorator).toEqual(undefined);
  });

  it('limitDate decorator should update the controller configuration', () => {
    const newMinDate = new Date(2020, 13, 8);
    const newMaxDate = new Date(2025, 13, 8);

    const ControllerClass = limitDatestDecorator(Controller, newMinDate, newMaxDate);
    const controllerInstance = new ControllerClass();
    const { maxDate, minDate, withLimitDatesDecorator } = controllerInstance;

    expect(withLimitDatesDecorator).toEqual(true);
    expect(getDateData(minDate)).toEqual(getDateData(newMinDate));
    expect(getDateData(maxDate)).toEqual(getDateData(newMaxDate));
  });

  it('range decorator should update the controller configuration', () => {
    const newRangeStart = new Date(2020, 13, 8);
    const newRangeEnd = new Date(2025, 13, 8);

    const ControllerClass = rangeDecorator(Controller, { rangeStart: newRangeStart, rangeEnd: newRangeEnd });
    const controllerInstance = new ControllerClass();
    const { rangeStart, rangeEnd, withRangeDecorator } = controllerInstance;

    expect(withRangeDecorator).toEqual(true);
    expect(getDateData(rangeStart)).toEqual(getDateData(newRangeStart));
    expect(getDateData(rangeEnd)).toEqual(getDateData(newRangeEnd));
  });

  it('theme decorator should update the controller configuration', () => {
    const newTheme: CustomTheme = { fontSize: '20px' };

    const ControllerClass = themeDecorator(Controller, newTheme);
    const controllerInstance = new ControllerClass();
    const { customTheme, withThemeDecorator } = controllerInstance;

    expect(withThemeDecorator).toEqual(true);
    expect(Object.is(customTheme, newTheme)).toEqual(true);
  });

  it('todos decorator should update the controller configuration', () => {
    const ControllerClass = todoDecorator(Controller);
    const controllerInstance = new ControllerClass();
    const { withTodosDecorator } = controllerInstance;

    expect(withTodosDecorator).toEqual(true);
  });

  it('view decorator should update the controller configuration', () => {
    let ControllerClass = viewDecorator(Controller, 'day');
    let controllerInstance = new ControllerClass();
    const { withViewDecorator, viewType } = controllerInstance;

    expect(withViewDecorator).toEqual(true);
    expect(viewType).toEqual('day');

    ControllerClass = viewDecorator(Controller, 'month');
    controllerInstance = new ControllerClass();
    expect(controllerInstance.viewType).toEqual('month');

    ControllerClass = viewDecorator(Controller, 'year');
    controllerInstance = new ControllerClass();
    expect(controllerInstance.viewType).toEqual('year');

    ControllerClass = viewDecorator(Controller, 'decade');
    controllerInstance = new ControllerClass();
    expect(controllerInstance.viewType).toEqual('decade');
  });

  it('weekends decorator should update the controller configuration', () => {
    const ControllerClass = weekendDecorator(Controller);
    const controllerInstance = new ControllerClass();
    const { withWeekendDecorator } = controllerInstance;

    expect(withWeekendDecorator).toEqual(true);
  });

  it('weekstart decorator should update the controller configuration', () => {
    let ControllerClass = weekstartDecorator(Controller, WeekDays.MONDAY);
    let controllerInstance = new ControllerClass();
    const { withweekstartDecorator, weekStart } = controllerInstance;

    expect(withweekstartDecorator).toEqual(true);
    expect(weekStart).toEqual(WeekDays.MONDAY);

    ControllerClass = weekstartDecorator(Controller, WeekDays.SUNDAY);
    controllerInstance = new ControllerClass();
    expect(controllerInstance.weekStart).toBe(WeekDays.SUNDAY);
  });
});

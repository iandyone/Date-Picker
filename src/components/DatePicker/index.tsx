import { IDecorator, IRenderData } from '@appTypes/index';
import ErrorBoundary from '@components/ErrorBoundary';
import { limitDatestDecorator } from '@decorators/limitDates';
import { rangeDecorator } from '@decorators/range';
import { themeDecorator } from '@decorators/theme';
import { todoDecorator } from '@decorators/todos';
import { viewDecorator } from '@decorators/view';
import { weekendDecorator } from '@decorators/weekends';
import { weekstartDecorator } from '@decorators/weekStart';
import { renderDataObserver } from '@observers/renderData';
import { Controller } from '@services/Controller';
import { View } from '@services/View';
import { FC } from 'react';
import { Component } from 'react';

import { IDatePickerProps, IDatePickerState } from './types';

class DatePickerComponent extends Component<IDatePickerProps, IDatePickerState> {
  private controller;
  private view;

  constructor(props: IDatePickerProps) {
    super(props);
    this.controller = this.getController(this.props);
    this.view = new View();
    this.state = {
      data: this.controller.getRenderData(),
    };
  }

  protected getController = ({
    todos,
    view,
    weekStart,
    maxDate,
    minDate,
    customTheme,
    range,
    noWeekends,
  }: IDecorator) => {
    let DataPicker = Controller;

    if (minDate || maxDate) {
      DataPicker = limitDatestDecorator(DataPicker, minDate, maxDate);
    }

    if (weekStart) {
      DataPicker = weekstartDecorator(DataPicker, weekStart);
    }

    if (view) {
      DataPicker = viewDecorator(DataPicker, view);
    }

    if (todos) {
      DataPicker = todoDecorator(DataPicker);
    }

    if (customTheme) {
      DataPicker = themeDecorator(DataPicker, customTheme);
    }

    if (range) {
      DataPicker = rangeDecorator(DataPicker, {});
    }

    if (noWeekends) {
      DataPicker = weekendDecorator(DataPicker);
    }

    return new DataPicker();
  };

  protected updateRenderData = () => {
    const data: IRenderData = this.controller.getRenderData();
    this.setState((prevState) => ({ ...prevState, data }));
  };

  componentDidMount() {
    renderDataObserver.subscribe(this.updateRenderData);
  }

  componentWillUnmount() {
    renderDataObserver.unsubscribe(this.updateRenderData);
  }

  shouldComponentUpdate(nextProps: Readonly<IDatePickerProps>) {
    const isCustomStylesUpdated = !Object.is(nextProps.customTheme, this.props.customTheme);

    if (this.props !== nextProps || isCustomStylesUpdated) {
      this.controller = this.getController(nextProps);

      this.setState((prevState) => ({
        ...prevState,
        data: this.controller.getRenderData(),
      }));
    }
    return true;
  }

  render() {
    const { datePicker, range, customTheme } = this.props;
    const data = this.state.data;
    const view = data.viewType;
    const decorators = { datePicker, view, range, customTheme };
    const datePickerView = this.view.getView(data, decorators);

    return <>{datePickerView}</>;
  }
}

export const DatePicker: FC<IDatePickerProps> = (props) => {
  return (
    <ErrorBoundary>
      <DatePickerComponent {...props} />
    </ErrorBoundary>
  );
};

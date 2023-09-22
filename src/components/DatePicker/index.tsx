import { Component } from 'react';
import { Controller } from '@services/Controller';
import { View } from '@services/View';

import { renderDataObserver } from '@observers/renderData';
import { IDatePickerProps, IDatePickerState } from './types';
import { calendarTypeDecorator } from '@decorators/view';
import { IDecorator, IRenderData } from '@appTypes/index';
import { todoDecorator } from '@decorators/todos';
import { weekStartDecorator } from '@decorators/weekStart';
import { limitDatestDecorator } from '@decorators/limitDates';
import { themeDecorator } from '@decorators/theme';

export class DatePicker extends Component<IDatePickerProps, IDatePickerState> {
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

  getController = ({ todos, view, weekStart, maxDate, minDate, customTheme }: IDecorator) => {
    let DataPicker = Controller;

    if (minDate || maxDate) {
      DataPicker = limitDatestDecorator(DataPicker, minDate, maxDate);
    }

    if (weekStart) {
      DataPicker = weekStartDecorator(DataPicker, weekStart);
    }

    if (view) {
      DataPicker = calendarTypeDecorator(DataPicker, view);
    }

    if (todos) {
      DataPicker = todoDecorator(DataPicker);
    }

    if (customTheme) {
      DataPicker = themeDecorator(DataPicker, customTheme);
    }

    return new DataPicker();
  };

  updateRenderData = () => {
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
    if (!Object.is(nextProps.customTheme, this.props.customTheme)) {
      return true;
    }

    if (this.props !== nextProps) {
      this.controller = this.getController(nextProps);

      this.setState((prevState) => ({
        ...prevState,
        data: this.controller.getRenderData(),
      }));
    }
    return true;
  }

  render() {
    const data = this.state.data;
    const { datePicker } = this.props;
    const view = data.viewType;

    const decorators = { datePicker, view };
    const datePickerView = this.view.getView(data, decorators);

    return <h1>{datePickerView}</h1>;
  }
}

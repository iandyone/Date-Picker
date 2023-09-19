import { Component } from 'react';
import { Controller } from 'src/services/Controller';
import { View } from 'src/services/View';

import { renderDataObserver } from '@observers/renderData';
import { IDatePickerProps, IDatePickerState } from './types';
import { calendarTypeDecorator } from 'src/decorators/calendarType';
import { IRenderData } from '@appTypes/index';

export class DatePicker extends Component<IDatePickerProps, IDatePickerState> {
  private controller;
  private view;

  constructor(props: IDatePickerProps) {
    super(props);
    this.controller = this.getController(this.props);
    this.view = new View();
    this.state = {
      data: this.controller.getRenderData(this.props.weekStart),
    };
  }

  getController = (props: IDatePickerProps) => {
    let DataPicker = Controller;
    const { view } = props;

    if (view) {
      DataPicker = calendarTypeDecorator(DataPicker, view);
    }

    return new DataPicker(view);
  };

  updateRenderData = () => {
    const data: IRenderData = this.controller.getRenderData(this.props.weekStart);
    this.setState((prevState) => ({ ...prevState, data }));
  };

  componentDidMount() {
    renderDataObserver.subscribe(this.updateRenderData);
  }

  componentWillUnmount() {
    renderDataObserver.unsubscribe(this.updateRenderData);
  }

  shouldComponentUpdate(nextProps: Readonly<IDatePickerProps>) {
    if (this.props !== nextProps) {
      this.controller = this.getController(nextProps);

      this.setState((prevState) => ({
        ...prevState,
        data: this.controller.getRenderData(this.props.weekStart),
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

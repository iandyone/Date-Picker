import { Component } from 'react';
import { Controller } from 'src/services/Controller';
import { View } from 'src/services/View';

import { renderDataObserver } from '@observers/renderData';
import { IRenderData } from 'src/services/Controller/types';
import { IDatePickerProps, IDatePickerState } from './types';
import { TestDecorator } from 'src/decorstors/testDecorator';

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
    let controller = new Controller();

    if (props.withDecorator) {
      const DecoratedController = TestDecorator(Controller);
      controller = new DecoratedController();
    }
    return controller;
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
    const { datePicker, withDecorator } = this.props;
    const decorators = { datePicker, withDecorator };
    const view = this.view.getView(data, decorators);

    return <h1>{view}</h1>;
  }
}

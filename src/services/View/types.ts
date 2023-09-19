import { IDecorator, IRenderData } from '@appTypes/index';
import { ReactElement } from 'react';

export interface IView {
  getView: (renderData: IRenderData, decorators: IDecorator) => ReactElement;
}

import { IDecorator, IRenderData } from '@appTypes';
import { ReactElement } from 'react';

export interface IView {
  getView: (renderData: IRenderData, decorators: IDecorator) => ReactElement;
}

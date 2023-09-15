import { IDecorator } from '@appTypes/index';
import { IRenderData } from 'src/services/Controller/types';
import { ReactElement } from 'react';

export interface IView {
  getView: (renderData: IRenderData, decorators: IDecorator) => ReactElement;
}

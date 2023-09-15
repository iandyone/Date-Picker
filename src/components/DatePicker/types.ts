import { IDecorator, WeekStart } from '@appTypes/index';
import { IRenderData } from 'src/services/Controller/types';

export interface IDatePickerState {
  data: IRenderData;
}

export interface IDatePickerProps extends IDecorator {
  weekStart?: WeekStart;
}

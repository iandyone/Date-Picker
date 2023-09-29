import { IDateCellItemDays } from '@appTypes';
import { DateHandler, subscriber } from '@appTypes/types';

export interface IDayCeilProps {
  date: IDateCellItemDays;
  currentMonth: number;
  handler: DateHandler;
  rangeStart: Date;
  rangeEnd: Date;
  onContext: subscriber;
}

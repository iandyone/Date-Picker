import { IDateCellItemDays, DateHandler, subscriber } from '@appTypes/index';

export interface IDayCeilProps {
  date: IDateCellItemDays;
  currentMonth: number;
  handler: DateHandler;
  rangeStart: Date;
  rangeEnd: Date;
  onContext: subscriber;
}

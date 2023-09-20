import { IDateCellItemDays, DateHandler } from '@appTypes/index';

export interface IDayCeilProps {
  date: IDateCellItemDays;
  currentMonth: number;
  handler: DateHandler;
}

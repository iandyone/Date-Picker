import { IDateCellItemYears, DateHandler } from '@appTypes';

export interface IMonthComponentProps {
  date: IDateCellItemYears;
  handler: DateHandler;
  isOtherDecadeYear: boolean;
}

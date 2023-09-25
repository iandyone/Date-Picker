import { IDateCellItemYears, DateHandler } from '@appTypes/index';

export interface IMonthComponentProps {
  date: IDateCellItemYears;
  handler: DateHandler;
  isOtherDecadeYear: boolean;
}

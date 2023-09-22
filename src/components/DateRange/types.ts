import { handlerRange } from '@appTypes/index';

export interface IDateRangeProps {
  handlerRange: handlerRange;
  rangeStart: Date;
  rangeEnd: Date;
  minDate: Date;
  maxDate: Date;
}

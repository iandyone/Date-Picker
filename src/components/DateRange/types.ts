import { handlerRange } from '@appTypes/types';

export interface IDateRangeProps {
  handlerRange: handlerRange;
  rangeStart: Date;
  rangeEnd: Date;
  minDate: Date;
  maxDate: Date;
}

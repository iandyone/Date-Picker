import { DateLimit, DecoratorBaseClass } from '@appTypes/index';

export function limitDatestDecorator(
  BaseClass: DecoratorBaseClass,
  minDate?: DateLimit,
  maxDate?: DateLimit,
) {
  return class extends BaseClass {
    constructor() {
      super();
      this.withLimitDatesDecorator = true;
      if (minDate) this.minDate = typeof minDate === 'number' ? new Date(minDate) : minDate;
      if (maxDate) this.maxDate = typeof maxDate === 'number' ? new Date(maxDate) : maxDate;
    }
  };
}

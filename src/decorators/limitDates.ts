import { DecoratorBaseClass } from '@appTypes/index';

export function limitDatestDecorator(BaseClass: DecoratorBaseClass, minDate?: Date, maxDate?: Date) {
  return class extends BaseClass {
    constructor() {
      super();
      this.withLimitDatesDecorator = true;
      if (minDate) this.minDate = minDate;
      if (maxDate) this.maxDate = maxDate;
    }
  };
}

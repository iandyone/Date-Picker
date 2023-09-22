import { DecoratorBaseClass } from '@appTypes/index';
import { getDateData } from '@utils/helpers/getDateData';

export function rangeDecorator(BaseClass: DecoratorBaseClass) {
  return class extends BaseClass {
    constructor() {
      super();
      const date = this.date;
      const { month, year } = getDateData(date);

      this.withRangeDecorator = true;
      this.rangeStart = new Date(year, month, 6);
      this.rangeEnd = new Date(year, month, 21);
    }

    clearDateRange() {
      this.rangeStart = null;
      this.rangeEnd = null;

      super.clearDateRange();
    }
  };
}

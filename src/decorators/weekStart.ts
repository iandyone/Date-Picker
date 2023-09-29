import { DecoratorBaseClass, WeekStart } from '@appTypes/types';

export function weekstartDecorator(BaseClass: DecoratorBaseClass, weekStart: WeekStart) {
  return class extends BaseClass {
    constructor() {
      super();
      this.withweekstartDecorator = true;
      this.weekStart = weekStart;
    }
  };
}

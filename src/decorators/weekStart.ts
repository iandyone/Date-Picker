import { DecoratorBaseClass, WeekStart } from '@appTypes/index';

export function weekStartDecorator(BaseClass: DecoratorBaseClass, weekStart: WeekStart) {
  return class extends BaseClass {
    constructor() {
      super();
      this.withWeekStartDecorator = true;
      this.weekStart = weekStart;
    }
  };
}

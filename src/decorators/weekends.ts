import { DecoratorBaseClass } from '@appTypes/index';

export function weekendDecorator(BaseClass: DecoratorBaseClass) {
  return class extends BaseClass {
    constructor() {
      super();
      this.withWeekendDecorator = true;
    }
  };
}

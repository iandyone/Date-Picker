import { DecoratorBaseClass } from '@appTypes/index';
import { renderDataObserver } from '@observers/renderData';

export function todoDecorator(BaseClass: DecoratorBaseClass) {
  return class extends BaseClass {
    constructor() {
      super();
      this.withTodosDecorator = true;
    }

    handlerOnClickCalendarItem(date: Date) {
      if (this.viewType === 'month') {
        this.date = date;
        this.viewType = 'day';
        renderDataObserver.notify();
      } else {
        super.handlerOnClickCalendarItem(date);
      }
    }
  };
}

import { DecoratorBaseClass } from '@appTypes/index';
import { renderDataObserver } from '@observers/renderData';

export function todoDecorator(BaseClass: DecoratorBaseClass) {
  return class extends BaseClass {
    constructor() {
      super();
      this.withTodosDecorator = true;
      this.viewType = 'month';
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

    switchDateNext() {
      if (this.viewType === 'day') {
        const date = this.date;
        date.setDate(date.getDate() + 1);
        renderDataObserver.notify();
      } else {
        super.switchDateNext();
      }
    }

    switchDatePrev(): void {
      if (this.viewType === 'day') {
        const date = this.date;
        date.setDate(date.getDate() - 1);
        renderDataObserver.notify();
      } else {
        super.switchDatePrev();
      }
    }
  };
}

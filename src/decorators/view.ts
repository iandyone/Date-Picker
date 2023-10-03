import { IDateCellItemYears } from '@appTypes';
import { DateCellItem, DecoratorBaseClass, ViewType } from '@appTypes/types';
import { renderDataObserver } from '@observers/renderData';

export function viewDecorator(BaseClass: DecoratorBaseClass, view: ViewType) {
  return class extends BaseClass {
    constructor() {
      super();
      this.withViewDecorator = true;
      this.viewType = view;
    }

    switchDateNext(): void {
      const view = this.viewType;
      const date = this.date;
      const newDate = new Date(date.toDateString());

      if (view === 'decade') {
        newDate.setFullYear(date.getFullYear() + 12);
        if (newDate <= this.maxDate) {
          date.setFullYear(date.getFullYear() + 12);
        }
      } else if (view === 'year') {
        newDate.setFullYear(date.getFullYear() + 1);
        if (newDate <= this.maxDate) {
          date.setFullYear(date.getFullYear() + 1);
        }
      }
      if (this.viewType === 'day') {
        const date = this.date;
        const newDate = new Date(date.toDateString());
        newDate.setDate(date.getDate() + 1);

        if (newDate <= this.maxDate) {
          date.setDate(date.getDate() + 1);
          renderDataObserver.notify();
        }
      } else if (view === 'month') {
        super.switchDateNext();
      }

      renderDataObserver.notify();
    }

    switchDatePrev(): void {
      const view = this.viewType;
      const date = this.date;
      const newDate = new Date(date.toDateString());

      if (view === 'decade') {
        newDate.setFullYear(date.getFullYear() - 12);
        if (newDate >= this.minDate) {
          date.setFullYear(date.getFullYear() - 12);
        }
      } else if (view === 'year') {
        newDate.setFullYear(date.getFullYear() - 1);
        if (newDate >= this.minDate) {
          date.setFullYear(date.getFullYear() - 1);
        }
      } else if (this.viewType === 'day') {
        const date = this.date;
        const newDate = new Date(date.toDateString());
        newDate.setDate(date.getDate() - 1);

        if (newDate >= this.minDate) {
          date.setDate(date.getDate() - 1);
          renderDataObserver.notify();
        }
      } else if (view === 'month') {
        super.switchDatePrev();
      }

      renderDataObserver.notify();
    }

    getCalendarDays(): DateCellItem[] {
      const view = this.viewType;

      if (view === 'year') {
        const year = this.date.getFullYear();
        const months: DateCellItem[] = [];

        for (let month = 0; month <= 11; ++month) {
          months.push({
            month,
            year,
          });
        }
        return months;
      }

      if (view === 'decade') {
        const years: IDateCellItemYears[] = [];
        const decadeStart = Math.trunc(this.date.getFullYear() / 10) * 10;

        for (let i = -1; i < 11; ++i) {
          years.push({
            year: decadeStart + i,
          });
        }

        return years;
      }
      return super.getCalendarDays();
    }
  };
}

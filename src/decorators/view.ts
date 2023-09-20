import { DateCellItem, DecoratorBaseClass, IDateCellItemYears, ViewType } from '@appTypes/index';
import { renderDataObserver } from '@observers/renderData';

export function calendarTypeDecorator(BaseClass: DecoratorBaseClass, view: ViewType) {
  return class extends BaseClass {
    constructor() {
      super(view);
      this.withViewDecorator = true;
    }

    switchDateNext(): void {
      const view = this.viewType;
      const date = this.date;

      if (view === 'decade') {
        date.setFullYear(date.getFullYear() + 12);
      } else if (view === 'year') {
        date.setFullYear(date.getFullYear() + 1);
      } else if (view === 'month') {
        super.switchDateNext();
      }

      renderDataObserver.notify();
    }

    switchDatePrev(): void {
      const view = this.viewType;
      const date = this.date;

      if (view === 'decade') {
        date.setFullYear(date.getFullYear() - 12);
      } else if (view === 'year') {
        date.setFullYear(date.getFullYear() - 1);
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

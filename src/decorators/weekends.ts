import { DateCellItem, DecoratorBaseClass, WeekDays, WeekDaysID, WeekDaysProps } from '@appTypes/index';
import { getDateData } from '@utils/helpers/getDateData';

export function weekendDecorator(BaseClass: DecoratorBaseClass) {
  return class extends BaseClass {
    constructor() {
      super();
      this.withWeekendDecorator = true;
    }

    getPreviousMonthDays(): DateCellItem[] {
      if (this.viewType === 'month') {
        const prevMonthDaysWithWeekends = super.getPreviousMonthDays();
        const prevMonthDays = prevMonthDaysWithWeekends.filter(({ day, year, month }) => {
          const { day: dayOfWeek } = getDateData(new Date(year, month, day));
          return dayOfWeek !== WeekDaysID.SATURDAY && dayOfWeek !== WeekDaysID.SUNDAY;
        });

        return prevMonthDays;
      }

      return super.getPreviousMonthDays();
    }

    getNextMonthDays(): DateCellItem[] {
      if (this.viewType === 'month') {
        const nextMonthDaysWithWeekends = super.getNextMonthDays();
        const nextMonthDays = nextMonthDaysWithWeekends.filter(({ day, year, month }) => {
          const { day: dayOfWeek } = getDateData(new Date(year, month, day));
          return dayOfWeek !== WeekDaysID.SATURDAY && dayOfWeek !== WeekDaysID.SUNDAY;
        });

        return nextMonthDays;
      }

      return super.getNextMonthDays();
    }

    getCurrentMonthDays(numberOfDays: number): DateCellItem[] {
      if (this.viewType === 'month') {
        const currentMonthDaysWithWeekends = super.getCurrentMonthDays(numberOfDays);
        const currentMonthDays = currentMonthDaysWithWeekends.filter(({ day, year, month }) => {
          const { day: dayOfWeek } = getDateData(new Date(year, month, day));
          return dayOfWeek !== WeekDaysID.SATURDAY && dayOfWeek !== WeekDaysID.SUNDAY;
        });

        return currentMonthDays;
      }

      return super.getCurrentMonthDays(numberOfDays);
    }

    getWeekDays({ format, start }: WeekDaysProps): string[] {
      if (this.withWeekendDecorator) {
        return super
          .getWeekDays({ format, start })
          .filter(
            (day) =>
              day !== WeekDays.SATURDAY.slice(0, 2).toUpperCase() &&
              day !== WeekDays.SUNDAY.slice(0, 2).toUpperCase(),
          );
      }

      return super.getWeekDays({ format, start });
    }
  };
}

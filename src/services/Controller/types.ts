import { DateCellItem, ICalendar, WeekStart } from '@appTypes/index';
import { FormEvent } from 'react';

export interface IController extends ICalendar {
  getRenderData: (weekStart: WeekStart) => IRenderData;
}

export interface IControllerState {
  date: Date;
}

export interface IRenderData {
  currentDate: string;
  currentMonth: number;
  weekDays: string[];
  calendarDays: DateCellItem[];
  getPrevMonth: () => void;
  getNextMonth: () => void;
  setUserDate: (e: FormEvent<HTMLFormElement>, date: Date) => void;
}

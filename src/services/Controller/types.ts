import { ICalendar, IRenderData, WeekStart } from '@appTypes/index';

export interface IController extends ICalendar {
  getRenderData: (weekStart: WeekStart) => IRenderData;
}

export interface IControllerState {
  date: Date;
}

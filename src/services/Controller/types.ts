import { ICalendar, IRenderData } from '@appTypes';

export interface IController extends ICalendar {
  getRenderData: () => IRenderData;
}

export interface IControllerState {
  date: Date;
}

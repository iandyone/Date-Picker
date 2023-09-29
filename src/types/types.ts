import { Controller } from '@services/Controller';
import { IDateCellItemDays, IDateCellItemMonths, IDateCellItemYears, ITheme } from '.';
import { MouseEvent } from 'react';

export type ID = number | string;

export type handler = () => void;

export type subscriber = handler;

export type WeekStart = 'Monday' | 'Sunday';

export type handlerContext = (e: MouseEvent<HTMLElement>) => void;

export type handlerRange = (date: Date, type: DateRangeType) => void;

export type DateCellItem = IDateCellItemDays | IDateCellItemMonths | IDateCellItemYears;

export type DateHandler = (date: Date, viewType?: ViewType) => void;

export type ViewType = 'day' | 'month' | 'year' | 'decade';

export type DecoratorBaseClass = typeof Controller;

export type SubmitHandler = (date: Date) => void;

export type DateLimit = Date | number;

export type CustomTheme = Partial<ITheme>;

export type DateRangeType = 'start' | 'end';

export type WeekDayFormat = 'full' | 'short';

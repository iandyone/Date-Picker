import { FC } from 'react';
import arrowLeft from '@assets/arrow-left.png';
import arrowRight from '@assets/arrow-right.png';
import xMark from '@assets/x-mark.png';
import calendar from '@assets/calendar.png';

const DEFAULT_SIZE = 20;

interface IIcon {
  onClick?: () => void;
}

export const ArrowLeftIcon: FC<IIcon> = (props: any) => {
  return <img src={arrowLeft} width={DEFAULT_SIZE} height={DEFAULT_SIZE} {...props} />;
};
export const ArrowLeftIcon2: FC<IIcon> = (props: any) => {
  return <img src={arrowLeft} width={DEFAULT_SIZE} height={DEFAULT_SIZE} {...props} />;
};
export const ArrowRightIcon: FC<IIcon> = (props: any) => {
  return <img src={arrowRight} width={DEFAULT_SIZE} height={DEFAULT_SIZE} {...props} />;
};
export const XMarkIcon: FC<IIcon> = (props: any) => {
  return <img src={xMark} width={DEFAULT_SIZE} height={DEFAULT_SIZE} {...props} />;
};
export const CalendarIcon: FC<IIcon> = (props: any) => {
  return <img src={calendar} width={DEFAULT_SIZE} height={DEFAULT_SIZE} {...props} />;
};

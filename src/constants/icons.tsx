import { FC } from 'react';
import arrowLeft from '@assets/arrow-left.png';
import arrowRight from '@assets/arrow-right.png';
import xMark from '@assets/x-mark.png';

const DEFAULT_SIZE = 20;

interface IIcomProps {
  src: string;
  size?: number;
  alt?: string;
  onClick?: () => void;
}

const Icon: FC<IIcomProps> = ({ src, alt, onClick, size = DEFAULT_SIZE }) => {
  return <img src={src} height={size} width={size} alt={alt} onClick={onClick} />;
};

export const ArrowLeftIcon: FC = () => <Icon src={arrowLeft} alt='Prev Date Button' />;
export const ArrowLeftIcon2: FC = () => <Icon src={arrowLeft} alt='Prev date Button' />;
export const ArrowRightIcon: FC = () => <Icon src={arrowRight} alt='Prev next Button' />;
export const XMarkIcon: FC = () => <Icon src={xMark} alt='Delete todo button' />;

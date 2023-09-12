import { FC, ReactNode } from 'react';

interface ButtonProps {
  color: string;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ color, children }) => {
  return (
    <>
      <button style={{ color }}>{children}</button>
    </>
  );
};

import { FC, ReactNode } from 'react';

interface ButtonProps {
  color: string;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ color,  children }) => {
  return (
    <>
      <button style={{ color, }}>{children}</button>
    </>
  );
};

export default Button;

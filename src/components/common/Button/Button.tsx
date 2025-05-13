// src/components/common/Button.tsx
import type { ReactNode } from 'react';
import * as styles from './button.css';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

export const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      type='button'
      className={`${styles.button} ${className ?? ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
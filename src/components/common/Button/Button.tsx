// src/components/common/Button.tsx
import type { ReactNode } from 'react';
import * as styles from './button.css';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

export const Button = ({ children, onClick, className, disabled=false}: ButtonProps) => {
  return (
    <button
      type='button'
      className={`${styles.button} ${className ?? ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
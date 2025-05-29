// src/components/common/Button.tsx
import type { ReactNode } from 'react';
import * as styles from './button.css';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
  onMouseLeave?: () => void;
  onTouchStart?: () => void;
  onTouchEnd?: () => void;
  className?: string;
  disabled?: boolean;
};

export const Button = ({ children, onClick, onMouseDown, onMouseUp, onMouseLeave, onTouchStart, onTouchEnd, className, disabled=false}: ButtonProps) => {
  return (
    <button
      type='button'
      className={`${styles.button} ${className ?? ''}`}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
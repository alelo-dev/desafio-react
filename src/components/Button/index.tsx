import React, { ButtonHTMLAttributes } from 'react';

import styles from './Button.module.scss';

type Props = {
  variant?: 'primary' | 'text';
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ variant = 'primary', children, ...props }: Props) => {
  return (
    <button className={`${styles.Button} ${variant}`} {...props}>
      {children}
    </button>
  );
};

export default Button;

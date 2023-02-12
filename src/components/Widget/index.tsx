import React from 'react';
import styles from './Widget.module.scss';

type Props = {
  children: React.ReactNode;
  color?: 'transparent' | 'light-green' | 'green';
  textAlign?: 'left' | 'center' | 'right';
};

const Widget = ({
  children,
  color = 'transparent',
  textAlign = 'center',
}: Props) => (
  <div
    className={`${styles.Widget} ${color} ${textAlign}`}
    data-testid="Widget"
  >
    {children}
  </div>
);

export default Widget;

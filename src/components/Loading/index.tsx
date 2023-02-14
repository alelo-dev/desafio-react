import React from 'react';
import styles from './Loading.module.scss';

const Loading = () => {
  return <div data-testid="Loading" className={styles.Spinner}></div>;
};

export default Loading;

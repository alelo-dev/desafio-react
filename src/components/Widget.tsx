import React from 'react';
import styles from './Widget.module.scss';

const Widget = (props: any) => (
  <div className={styles.Widget} data-testid="Widget" id="widget">
    {props.widget === 'promo' && (
      <div id="promo">
        <h2> Faça seu cartão Alelo!! </h2>
        <a href="#">Ver mais</a>
      </div>
    )}

    {props.widget === 'card' && (
      <div id="card">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    )}

    {props.widget === 'info' && (
      <div id="info">
        <h2> Faça seu cartão Alelo hoje mesmo!! </h2>
        <p>produtos em destaque</p>
        <a href="#">Ver mais</a>
      </div>
    )}
  </div>
);

export default Widget;

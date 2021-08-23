/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './Widget.module.scss';
import imgCard from '../../assets/cartoes.png';
import imgAjuda from '../../assets/button.png';

const Widget = (props: any) => (

  <div className={styles.Widget} data-testid="Widget" id="widget">
    
    {props.widget === 'promo' && 
      <div id="promo" className={styles.promo}>
        <h2>Peça seu cartão Alelo!! </h2>
        <img src={imgCard}></img>
      </div>
    }

    {props.widget === 'card' && 
      <div  id="card" className={styles.card}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
      </div>
    }

    {props.widget === 'info' && 
      <div id="info" className={styles.info}>
        <h2>Precisando de ajuda?</h2>
        <p>Fale com nosso time de atendimento.</p>
        <img src={imgAjuda}></img>
      </div>
    }
  </div>
);

export default Widget;
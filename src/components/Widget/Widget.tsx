/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './Widget.module.scss';

import image from'../../assets/cartoes.png';
import image2 from'../../assets/button.png';

const Widget = (props: any) => (

  <div className={styles.Widget}>
    
    {props.widget === 'promo' && 
      <div className={styles.Promo}>
        <h2> Faça seu cartão Alelo!! </h2>
        <img src={image} style={{width: 130, height: 60, marginTop: 20, marginLeft: 50}}/>
      </div>
    }
    
      {props.widget === 'card' && 
        <div  className={styles.Card}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      }

      {props.widget === 'info' && 
        <div className={styles.Info}>
          <div style={{fontSize: 30, color: '#BDD753'}}>Precisando de ajuda?</div>
          <div>Fale com o nosso time de atendimento!</div>
          <div><img src={image2} style={{width: 120, height: 40, marginTop: 20}}/></div>
        </div>
      }
    
  </div>
);

export default Widget;

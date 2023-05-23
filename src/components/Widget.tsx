import React from 'react';
import styles from './Widget.module.scss';
import imgCard from '../assets/cartoes.png';
import imgAjuda from '../assets/button.png';

interface WidgetProps {
  widget: string;
}

const Widget: React.FC<WidgetProps> = ({ widget }) => {
  const renderPromoWidget = () => (
    <div id="promo" className={styles.promo}>
      <h2>Peça seu cartão Alelo!</h2>
      <img src={imgCard} alt='Cartões Alelo' />
    </div>
  );

  const renderCardWidget = () => (
    <div id="card" className={styles.card}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
    </div>
  );

  const renderInfoWidget = () => (
    <div id="info" className={styles.info}>
      <h2>Precisando de ajuda?</h2>
      <p>Fale com nosso time de atendimento.</p>
      <img src={imgAjuda} alt='' />
    </div>
  );

  return (
    <div className={styles.Widget} data-testid="Widget" id="widget">
      {widget === 'promo' && renderPromoWidget()}
      {widget === 'card' && renderCardWidget()}
      {widget === 'info' && renderInfoWidget()}
    </div>
  );
};

export default Widget;
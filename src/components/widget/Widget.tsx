import React from "react";

import cards from "../../assets/cards.png";
import button from "../../assets/button.png";

import "../../styles/components/widget.scss";

const Widget = (props: any) => (
  <div data-testid="Widget" id="widget">
    {props.widget === "special-offer" && (
      <div className="wrapper special-offer">
        <h3> Peça seu cartão Alelo! </h3>
        <a
          href="https://credenciamento.alelo.com.br/cadastro"
          rel="noreferrer noopener"
          target="_blank">
          <img src={cards} alt="Cartões" className="image-cards"></img>
        </a>
      </div>
    )}

    {props.widget === "card" && (
      <div className="wrapper card">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
    )}

    {props.widget === "info" && (
      <div className="wrapper info">
        <h3> Precisando de ajuda? </h3>
        <p>Fale com nosso time de atendimento!</p>
        <a
          href="https://www.alelo.com.br/meucartao/duvidas-frequentes"
          rel="noreferrer noopener"
          target="_blank">
          <img src={button} alt="Link de ajuda" className="image-help-me"></img>
        </a>
      </div>
    )}
  </div>
);

export default React.memo(Widget);

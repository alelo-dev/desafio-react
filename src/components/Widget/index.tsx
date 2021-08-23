/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, GetCardButton } from "./styles";
import cartoes from "../../assets/cartoes.png";
interface WidgetProps {
  widget?: "promo" | "card" | "info";
}

const Widget = ({ widget }: WidgetProps) => (
  <Container data-testid="Widget" id="widget" type={widget}>
    {widget === "promo" && (
      <div id="promo">
        <h2> Faça seu cartão Alelo!! </h2>
        <a href="#">
          <img src={cartoes} alt="cartoes" />
        </a>
      </div>
    )}
    {widget === "card" && (
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
    {widget === "info" && (
      <div id="info">
        <h2> Faça seu cartão Alelo hoje mesmo!! </h2>
        <GetCardButton>QUERO MEU CARTAO!</GetCardButton>
      </div>
    )}
  </Container>
);
export default Widget;

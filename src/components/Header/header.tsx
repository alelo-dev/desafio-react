import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { Container } from "./style";
import Logo from "../../assets/logo.png";
import * as I from "../../interfaces/interfaces";

const Header: React.FC<I.Header> = ({ toggleTheme }) => {
  const { colors, mode } = useContext(ThemeContext);

  return (
    <Container>
      <a
        href="https://www.alelo.com.br"
        title="Alelo - Empresa líder em benefícios"
      >
        <img alt="Alelo - Empresa líder em benefícios" height={40} src={Logo} />
      </a>
      <Switch
        onChange={toggleTheme}
        checked={mode === "dark"}
        activeBoxShadow={colors.grayLight}
        checkedIcon={
          <svg
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "2px",
              justifyContent: "center",
            }}
            height="28px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g id="icon-29-sun" fill="#f5d106">
                <path
                  d="M16.5290527,22 C19.566619,22 22.0290527,19.5375663 22.0290527,16.5 C22.0290527,13.4624337 19.566619,11 16.5290527,11 C13.4914865,11 11.0290527,13.4624337 11.0290527,16.5 C11.0290527,19.5375663 13.4914865,22 16.5290527,22 L16.5290527,22 Z M16.5290527,7 C16.2529104,7 16.0290527,7.2157526 16.0290527,7.49538898 L16.0290527,9.50461102 C16.0290527,9.7782068 16.2609863,10 16.5290527,10 C16.8051951,10 17.0290527,9.7842474 17.0290527,9.50461102 L17.0290527,7.49538898 C17.0290527,7.2217932 16.7971191,7 16.5290527,7 L16.5290527,7 Z M23.2671105,9.79099493 C23.0718484,9.59573278 22.760997,9.59000166 22.5632642,9.78773445 L21.1425297,11.208469 C20.9490683,11.4019304 20.9562386,11.7227637 21.1457902,11.9123153 C21.3410523,12.1075774 21.6519037,12.1133085 21.8496365,11.9155758 L23.270371,10.4948412 C23.4638325,10.3013798 23.4566621,9.9805465 23.2671105,9.79099493 L23.2671105,9.79099493 Z M26.0581055,16.5290527 C26.0581055,16.2529104 25.8423529,16.0290527 25.5627165,16.0290527 L23.5534945,16.0290527 C23.2798987,16.0290527 23.0581055,16.2609863 23.0581055,16.5290527 C23.0581055,16.8051951 23.2738581,17.0290527 23.5534945,17.0290527 L25.5627165,17.0290527 C25.8363123,17.0290527 26.0581055,16.7971191 26.0581055,16.5290527 L26.0581055,16.5290527 Z M23.2671105,23.2671105 C23.4623727,23.0718484 23.4681038,22.760997 23.270371,22.5632642 L21.8496365,21.1425297 C21.6561751,20.9490683 21.3353418,20.9562386 21.1457902,21.1457902 C20.9505281,21.3410523 20.9447969,21.6519037 21.1425297,21.8496365 L22.5632642,23.270371 C22.7567257,23.4638325 23.077559,23.4566621 23.2671105,23.2671105 L23.2671105,23.2671105 Z M16.5290527,26.0581055 C16.8051951,26.0581055 17.0290527,25.8423529 17.0290527,25.5627165 L17.0290527,23.5534945 C17.0290527,23.2798987 16.7971191,23.0581055 16.5290527,23.0581055 C16.2529104,23.0581055 16.0290527,23.2738581 16.0290527,23.5534945 L16.0290527,25.5627165 C16.0290527,25.8363123 16.2609863,26.0581055 16.5290527,26.0581055 L16.5290527,26.0581055 Z M9.79099493,23.2671105 C9.98625707,23.4623727 10.2971084,23.4681038 10.4948412,23.270371 L11.9155758,21.8496365 C12.1090372,21.6561751 12.1018668,21.3353418 11.9123153,21.1457902 C11.7170531,20.9505281 11.4062018,20.9447969 11.208469,21.1425297 L9.78773445,22.5632642 C9.59427302,22.7567257 9.60144335,23.077559 9.79099493,23.2671105 L9.79099493,23.2671105 Z M7,16.5290527 C7,16.8051951 7.2157526,17.0290527 7.49538898,17.0290527 L9.50461102,17.0290527 C9.7782068,17.0290527 10,16.7971191 10,16.5290527 C10,16.2529104 9.7842474,16.0290527 9.50461102,16.0290527 L7.49538898,16.0290527 C7.2217932,16.0290527 7,16.2609863 7,16.5290527 L7,16.5290527 Z M9.79099493,9.79099493 C9.59573278,9.98625707 9.59000166,10.2971084 9.78773445,10.4948412 L11.208469,11.9155758 C11.4019304,12.1090372 11.7227637,12.1018668 11.9123153,11.9123153 C12.1075774,11.7170531 12.1133085,11.4062018 11.9155758,11.208469 L10.4948412,9.78773445 C10.3013798,9.59427302 9.9805465,9.60144335 9.79099493,9.79099493 L9.79099493,9.79099493 Z"
                  id="sun"
                ></path>
              </g>
            </g>
          </svg>
        }
        uncheckedIcon={
          <div
            style={{
              height: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              height="18.68"
              width="18.68"
              style={{
                paddingTop: "3px",
              }}
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                style={{ height: "16.68" }}
                id="Moon"
                d="M24.86,15.53a.5.5,0,0,0-.57,0A10.71,10.71,0,0,1,9.57.79.5.5,0,0,0,9,0,12.77,12.77,0,1,0,25,16,.5.5,0,0,0,24.86,15.53Z"
                fill="#000"
              />
            </svg>
          </div>
        }
        offColor={colors.backgroundColor}
        onColor={colors.backgroundColor}
      />
    </Container>
  );
};

export default Header;
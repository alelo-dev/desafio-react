import React from "react";
import { Container } from "./styled";
import Card from "../../assets/cartoes.png";
import Button from "@mui/material/Button";
import { ReactComponent as PhoneIcon } from "../../assets/phone.svg";
interface IPropsWidget {
  type: string;
}

const Widget: React.FC<IPropsWidget> = ({ type }) => {
  return (
    <Container type={type} data-testid="Widget" id="widget">
      {type === "type1" ? (
        <>
          <h2> Peça seu cartão Alelo! </h2>
          <a href="https://www.alelo.com.br/">
            {" "}
            <img
              alt="Alelo - Empresa líder em benefícios"
              height={50}
              src={Card}
            />
          </a>
        </>
      ) : type === "type2" ? (
        <p>
          Aqui na Alelo, vocé lorem ipsum consectetur adipiscing elit. Etiam
          convallis nisi quam, luctus blandit nisi lobortis quis. Proin sem
          ligula, semper id libero sit amet, auctor ullamcorper dui! :)
        </p>
      ) : (
        type === "type3" && (
          <>
            <h2> Precisando de ajuda? </h2>
            <h4>Fale com nosso time de atendimento!</h4>
            <Button variant="outlined" startIcon={<PhoneIcon />}>
              ME AJUDA!
            </Button>
          </>
        )
      )}
    </Container>
  );
};

export default Widget;

import React from "react";
import * as Mui from "@mui/material";
import * as Styled from "./styled";
import * as I from "../../interfaces/interfaces";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";
import { NumericFormat } from "react-number-format";

const categoryProducts: I.Select[] = [
  { value: 1, label: "electronics" },
  { value: 2, label: "jewelery" },
];

const Modal: React.FC<I.Modal> = ({
  openModal,
  onClickClose,
  onClose,
  onSubmit,
  onChangeCategory,
  onChangeDescription,
  onChangePrice,
  onChangeTitle,
  titleModal,
  valueCategory,
  valueDescription,
  valuePrice,
  valueTitle,
  titleButton,
  isLoading,
}) => {
  return (
    <Mui.Modal
      open={openModal}
      onClose={onClose}
      aria-labelledby={titleModal}
      aria-describedby={"Modal de" + titleModal}
    >
      <Styled.Form onSubmit={onSubmit}>
        <Mui.IconButton color="primary" onClick={onClickClose}>
          <CloseIcon />
        </Mui.IconButton>
        <Styled.Fildset>
          <Styled.Title>{titleModal}</Styled.Title>
          <Mui.TextField
            onChange={onChangeTitle}
            label="Nome Produto"
            name="Nome Produto"
            value={valueTitle}
            required
            variant="outlined"
            color="success"
            type="text"
          />
          <NumericFormat
            onChange={onChangePrice}
            label="Preço"
            name="Preço Produto"
            value={valuePrice}
            required
            variant="outlined"
            color="success"
            customInput={Mui.TextField}
            type="text"
            decimalScale={2}
            thousandSeparator={"."}
            decimalSeparator={","}
            prefix={"R$ "}
            allowNegative={false}
          />
          <Mui.TextField
            onChange={onChangeCategory}
            label="Categoria"
            name="Categoria Produto"
            value={valueCategory}
            required
            variant="outlined"
            color="success"
            select
          >
            {categoryProducts.map((option: I.Select) => (
              <Mui.MenuItem key={option.value} value={option.label}>
                {option.label}
              </Mui.MenuItem>
            ))}
          </Mui.TextField>
          <Mui.TextField
            onChange={onChangeDescription}
            label="Descrição"
            name="Descrição Produto"
            value={valueDescription}
            variant="outlined"
            color="success"
            type="text"
            multiline
            rows={2}
          />
          <Mui.Button
            type="submit"
            variant="outlined"
            color="success"
            size="large"
          >
            {isLoading ? <Mui.CircularProgress color="success" /> : titleButton}
          </Mui.Button>
        </Styled.Fildset>
      </Styled.Form>
    </Mui.Modal>
  );
};

export default Modal;

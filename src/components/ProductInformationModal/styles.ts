import styled from "styled-components";
import { darken } from "polished";
export const ModalTitle = styled.h3`
  color: ${(props) => props.theme.colors.green900};
`;

export const ProductTitle = styled.h4`
  color: ${(props) => props.theme.colors.gray800};
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 200px;
  #productImage {
    margin: 1rem;
  }
  #dataContainer {
    flex: 1;
    margin-left: 1rem;
    margin-top: 2rem;
    p {
      font-weight: bold;

      span {
        font-weight: normal;
      }
    }
  }
`;

export const ProductDescription = styled.div`
  text-align: justify;
  text-indent: 2rem;
`;

export const CloseButton = styled.button`
  background: ${(props) => props.theme.colors.green500};
  color: ${(props) => props.theme.colors.gray100};
  &:hover {
    background: ${(props) => darken(0.2, props.theme.colors.green500)};
    color: ${(props) => props.theme.colors.gray100};
  }
`;

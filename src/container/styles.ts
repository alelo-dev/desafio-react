import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  .App {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f7f7f7;
    max-width: 1024px;
    margin: 2rem auto 2rem auto;
    border-radius: 5px;
    box-shadow: 1px 1px 5px #b0b0b0;
  }
  .promocoes {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .produtos {
    width: 100%;
    padding: 1rem;
  }
`;
export const IconButtonContainer = styled.button`
  border: none;
  background: transparent;
  margin: 0.2rem;
`;

export const TabHeader = styled.div`
  display: flex;
  justify-content: flex-end;

  #novo {
    border: none;
    background: ${(props) => props.theme.colors.green900};
    padding: 0.5rem 0.7rem;
    margin: 0.2rem;
    border-radius: 5px;
    color: ${(props) => props.theme.colors.gray100};
    transition: background 0.2s;
    &:hover {
      background: ${(props) => darken(0.1, props.theme.colors.green900)};
      color: ${(props) => props.theme.colors.gray100};
    }
  }
`;

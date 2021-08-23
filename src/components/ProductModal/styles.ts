import styled from "styled-components";
import { darken } from "polished";
import { FormControl } from "react-bootstrap";

export const ModalTitle = styled.h3`
  color: ${(props) => props.theme.colors.green900};
`;

export const Label = styled.label`
  min-width: 100px;
  text-align: right;
  margin-right: 1rem;
  margin: 0.5rem;
`;

export const Input = styled.input`
  &:focus {
    border: 1px solid ${(props) => props.theme.colors.green500};
    box-shadow: 0 0 5px ${(props) => props.theme.colors.green500};
  }
`;
export const TextArea = styled.textarea`
  &:focus {
    border: 1px solid ${(props) => props.theme.colors.green500};
    box-shadow: 0 0 5px ${(props) => props.theme.colors.green500};
  }
`;
export const SpanError = styled.span`
  color: red;
  font-size: 0.9rem;
`;

export const Button = styled.button`
  border: none;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background 0.2s;
  background: ${(props) => {
    if (props.type === "submit") {
      return props.theme.colors.green900;
    }
    return "#DDDDDD";
  }};
  color: ${(props) => {
    if (props.type === "submit") {
      return props.theme.colors.gray100;
    }
    return props.theme.colors.gray800;
  }};

  &:hover {
    ${(props) => {
      if (props.type === "submit") {
        return `    
        background: ${darken(0.2, props.theme.colors.green900)};
        color: ${props.theme.colors.gray100};
        `;
      }
      return `    
        background: ${darken(0.2, "#DDDDDD")};
        color: ${props.theme.colors.gray800};
        `;
    }}
  }
`;

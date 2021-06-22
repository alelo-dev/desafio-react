import styled from 'styled-components'
import { Colors } from './Card';

type ContainerProps = {
  bgColor: Colors
}

export const Container = styled.section<ContainerProps>`
    width: min(45rem, 100%);
    margin: 10px;
    height: fit-content;
    padding: 1.5rem;
    border-radius: 1.5rem;
    margin-top: 2rem;
    float: left;
    ${({ bgColor, theme }) => bgColor === 'default' && `
      background-color: ${theme.colors.commons.whiteLight};
    `}
    ${({ bgColor, theme }) => bgColor === 'primary' && `
      background-color: ${theme.colors.primary.main};
    `}
    ${({ bgColor, theme }) => bgColor === 'secondary' && `
      background-color: ${theme.colors.secondary.main};
    `}
`;
import styled from 'styled-components';
import { ColorButton, SizeButton } from './Button';

type ButtonProps = {
  size: SizeButton
  color: ColorButton
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 1.5rem;
  cursor: pointer;
  font-weight: 700;
  svg {
    margin-right: 1rem;
  }
  ${({ size }) => size === 'fullSize' && `
      width: 100%;
      padding: 1.5rem;
    `}
    ${({ size }) => size === 'large' && `
      width: min(35rem, 100%);
      padding: 1.5rem;
    `}
    ${({ size }) => size === 'medium' && `
      width: min(25rem, 100%);
      padding: 1rem;
    `}
    ${({ size }) => size === 'small' && `
      width: min(15rem, 100%);
      padding: .5rem;
    `}
    ${({ color, theme }) => color === 'default' && `
      color: ${theme.colors.commons.grayDark};
      background-color: ${theme.colors.commons.whiteLight};
    `}
    ${({ color, theme }) => color === 'primary' && `
      color: ${theme.colors.primary.main};
      background-color: ${theme.colors.secondary.main};
    `}
    ${({ color, theme }) => color === 'secondary' && `
      color: ${theme.colors.secondary.main};
      background-color: ${theme.colors.primary.main};
    `}
    ${({ color, theme }) => color === 'link' && `
      color: ${theme.colors.secondary.main};
      background-color: transparent;
    `}
`;

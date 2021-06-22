import styled from 'styled-components';

export const Container = styled.article`
  width: min(45rem, 100%)
`;
export const Paragraph = styled.p`
  text-align: center;
  font-size: 1.3rem;
  color: ${props => props.theme.colors.commons.grayDark};
`;

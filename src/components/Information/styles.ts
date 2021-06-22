import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: min(45rem, 100%)
`;
export const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({theme}) => theme.colors.primary.main};
  margin-bottom: .5rem;
`;
export const Paragraph = styled.p`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${({theme}) => theme.colors.commons.whiteLight};
`;

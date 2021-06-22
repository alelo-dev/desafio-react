import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;
export const Content = styled.article`
  max-width: 124rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const Paragraph = styled.h2`
  width: 100%;
  text-align: left;
  color: ${props => props.theme.colors.secondary.main};
`;
export const Article = styled.article`
  margin: 0 4rem;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media(max-width: 800px) {
    flex-direction: column;
    position: relative;
  }
`
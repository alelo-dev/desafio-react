import styled from 'styled-components';

export const Container = styled.header`
  height: 40px;
  background: ${props => props.theme.colors.greenLight};
  color: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;
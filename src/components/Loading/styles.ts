import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  display: flex;
`

export const Loading = styled.div`
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid ${props => props.theme.colors.secondary.main};
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${props => props.theme.colors.secondary.main} transparent transparent transparent;
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

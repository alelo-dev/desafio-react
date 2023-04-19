import styled from 'styled-components'

interface ThemeIProps {
  type?: string;
}

export const Container = styled.section<ThemeIProps>`
  grid-area:${(props) =>
      props.type === "type1" ? "1 / 4 / 2 / 7"
      : props.type === "type2" ? "4 / 2 / 4 / 5"
      : props.type === "type3" && "4 / 6 / 4 / 9"};
  display:flex ;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => props.type === "type3" ? "column" : "row"};
  height: 80px;
  padding: 20px;
  border-radius: 15px;
  background-color: ${(props) => props.type === "type2" ? props.theme.colors.greenLight : props.theme.colors.greenDark};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  @media (max-width: 576px) {
    grid-area:${(props) =>
      props.type === "type1" ? "1 / 1 / 2 / 7"
      : props.type === "type2" ? "4 / 1 / 5 / 7"
      : props.type === "type3" && "5 / 1 / 6 / 7"};
    flex-direction: column;
    padding: 15px;
    >p{
      font-size:${({ theme }) => theme.sizes.small};
    }
    >h2{
      font-size:${({ theme }) => theme.sizes.text3};
    }
    >h4{
      font-size:0.8rem;
      line-height: 2.15;
    }
  }
  >p{
    font-size:${({ theme }) => theme.sizes.text3};
    text-align: center;
    color:${({ theme }) => theme.colors.black};
  }
  >h2{
    font-weight: ${(props) => props.type === "type1" ? 600 : 700};
    font-size:${({ theme }) => theme.sizes.text2};
    color: ${(props) => props.type === "type1" ? props.theme.colors.white : props.theme.colors.greenLight};
  }
  >h4{
    font-weight:300;
    inset-block: 7px;
    color:${({ theme }) => theme.colors.white};
  }
  img{
    margin:0px 15px;
    @media (max-width: 576px) {
      margin: 10px 0px 0px 0px;
    }
  }
  .MuiButton-root{
    background: ${({ theme }) => theme.colors.greenLight};
    color: ${({ theme }) => theme.colors.greenDark};
    font-weight: 600;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.greenLight};
    &:hover{
      color: ${({ theme }) => theme.colors.greenLight};
      border: 1px solid ${({ theme }) => theme.colors.greenLight};
    }
  }
`
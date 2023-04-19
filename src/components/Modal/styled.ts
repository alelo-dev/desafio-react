import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 90%;
  @media (max-width: 992px) {
    width: 50%;
    height: 95%;
  }
  @media (max-width: 576px) {
    width: 100%;
    height: 98%;
  }
`;

export const Fildset = styled.fieldset`
  display: flex;
  width: 80%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${({ theme }) => theme.mode === "light" ? theme.colors.white : theme.colors.black};
  box-shadow:${({ theme }) => theme.mode === "light" ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" : "0 -2px 10px rgba(0, 0, 0, 1)"};
  border-radius: 10px;
  @media (max-width: 992px) {
    width: 80%;
    height: 95%;
  }
  @media (max-width: 576px) {
    width: 95%;
    height: fit-content;
    padding:15px 0px;

    .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input, 
    .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input,
    .css-13zacu9-MuiInputBase-root-MuiOutlinedInput-root{
      padding:10px 8px;
    }
    .css-kzf2d7-MuiInputBase-root-MuiOutlinedInput-root,
    .css-13zacu9-MuiInputBase-root-MuiOutlinedInput-root{
      font-size:${({ theme }) => theme.sizes.text3};
    }
    
  }
  > div {
    width: 80%;
    margin: 0.4rem 0 0.4rem 0;
    
  }
  .css-kzf2d7-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline{
    border-color:${({ theme }) => theme.colors.greenLight}
  }
  .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon{
    color:${({ theme }) => theme.colors.textColor}
  }
  .css-1d3z3hw-MuiOutlinedInput-notchedOutline{
    border-color:${({ theme }) => theme.colors.textColor}
  }
  .MuiInputLabel-root{
      color: ${({ theme }) => theme.colors.textColor} !important;
    }
  .MuiOutlinedInput-root{
      color: ${({ theme }) => theme.colors.textColor} !important;
  }
  .MuiButtonBase-root {
    margin-top: 0.5rem;
    padding: 8px 4px;
    border: 2px solid ${({ theme }) => theme.colors.greenLight};
    color: ${({ theme }) => theme.colors.greenLight};
    width: 80%;
    font-weight: 600;
    &:hover {
      background-color: ${({ theme }) => theme.colors.greenLight};
      border: 2px solid ${({ theme }) => theme.colors.greenLight};
      color: ${({ theme }) => theme.colors.greenDark};
    }
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size:${({ theme }) => theme.sizes.h4};
  color: ${({theme}) => theme.mode === "light" ? theme.colors.greenDark : theme.colors.greenLight};
  margin-bottom: 50px;
  text-align: center;
  @media (max-width: 576px) {
    margin-bottom: 20px;
  font-size:${({ theme }) => theme.sizes.text1};

}
`;

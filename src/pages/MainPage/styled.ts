import styled from 'styled-components';

export const Main = styled.main`
  padding: 30px 60px;
  @media (max-width: 576px) {
    padding: 10px 10px;

  }
`;

export const Container = styled.section`
  box-shadow:${({ theme }) => theme.mode === "light" ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" : "0 -2px 10px rgba(0, 0, 0, 1)"};
  border-radius:0.5rem;
  background-color: ${({ theme }) => theme.mode === "light" ? theme.colors.white : theme.colors.black};
  display: grid;
  grid-template-columns: 0.5fr 1fr 1.5fr 1fr 1.3fr 1fr 1.5fr 1fr 0.5fr;
  grid-template-rows: 200px 60px 425px 150px;
  align-items: center;
  @media (max-width: 576px) {
    padding:10px ;
    grid-template-columns: 0.5fr repeat(4, 1fr) 0.5fr;
    grid-template-rows: 140px 45px 445px 145px 145px;
  }
  .add-products{
    grid-area: 2 / 2 / 3 / 9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 576px) {
      grid-area: 2 / 1 / 3 / 7;
      justify-content: space-around;
      h4, .MuiButton-root{
        font-size:${({ theme }) => theme.sizes.small};
      }
    }
    h4{
      color: ${({ theme }) => theme.mode === "light" ? theme.colors.greenDark : theme.colors.greenLight};
    }
    .MuiButton-root{
      background: ${({ theme }) => theme.colors.greenLight};
      color: ${({ theme }) => theme.colors.greenDark};
      font-weight: 600;
      border-radius: 5px;
      border: 2px solid ${({ theme }) => theme.colors.greenDark};
      &:hover{
        color: ${({ theme }) => theme.colors.greenLight};
        border: 2px solid ${({ theme }) => theme.colors.greenLight};
        background: ${({ theme }) => theme.colors.greenDark};
      }
    }
  }

  .MuiTableContainer-root{
    grid-area:3 / 1 / 4 / 10;
    @media (max-width: 576px) {
      grid-area: 3 / 1 / 4 / 7;
      overflow-x: auto;
  }
  }
  .MuiTable-root{
    grid-area:3 / 1 / 4 / 10;
    @media (max-width: 576px) {
      grid-area: 3 / 1 / 4 / 7;
      overflow-x: auto;
      *.MuiTableCell-root{
        padding:5px;
        font-size: 0.65rem;
      }
  }
    }
    .MuiTableHead-root{
      .MuiTableCell-root {
        background-color: ${({ theme }) => theme.colors.backgroundColor};
  }
    }
  .MuiTableCell-root{
    color: ${({ theme }) => theme.colors.textColor};
    .edit{
          color: ${({ theme }) => theme.colors.greenDark};
        }
        .delete{
          color: ${({ theme }) => theme.colors.greenLight};
        }
  }
`;

export const Promotion = styled.div`
	display:flex ;
`;

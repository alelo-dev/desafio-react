import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
	margin:0;
	padding:0;
	box-sizing:0;
	font-family:${({ theme }) => theme.fonts.font1} !important;

  /* width */
	::-webkit-scrollbar {
  width: 8px;
  height: 5px;
}
/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  background:${({theme}) => theme.colors.black};
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${({theme}) => theme.colors.grayLight};
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${({theme}) => theme.colors.greenLight}; 
}

html{
	@media (max-width: 1199,92px){
		font-size: 93,75%
	}
	@media (max-width: 767,92px){
		font-size:87,5%;
	}
}
body{
	background-color:${({theme}) => theme.colors.backgroundColor};
}
.MuiModal-root{
	display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
}
`;

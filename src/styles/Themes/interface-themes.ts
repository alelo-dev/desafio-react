import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: string;
    colors: {
      greenLight: string,
      greenDark: string,
      grayLight: string,
      grayDark: string,
      black:string,
      white:string,
      backgroundColor: string,
      textColor: string,
    },
    fonts:{
      font1: string;
    },
    sizes: {
		  h1:string,
		  h2: string,
		  h3:string,
		  h4: string,
		  h5: string,
		  h6: string,
		  p:string,
		  text1: string,
		  text2: string,
		  text3: string,
		  small:string
	  },
  }
}

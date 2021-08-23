// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        green900: string,//'#BDD753';
        green500: string,// '#0E7F61';
        gray800: string,//'#505050';
        gray500: string,//'#696969';
        gray100: string,//'#F7F7F7'
    };
  }
}
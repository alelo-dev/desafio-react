import { ThemeProvider, DefaultTheme } from "styled-components";
import usePeristedState from "./utils/usePersistedState";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import light from "./styles/Themes/light";
import dark from "./styles/Themes/dark";

import GlobalStyle from "./styles/global-styles";
import Header from "./components/Header/header";
import MainPage from "./pages/MainPage/mainPage";

const App = () => {
  const [theme, setTheme] = usePeristedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.mode === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <MainPage />
    </ThemeProvider>
  );
};

export default App;

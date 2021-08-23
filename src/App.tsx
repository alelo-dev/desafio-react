import React from "react";
//import './App.css';
import MainPage from "./container/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalStyles } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./services/react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <MainPage />
        <GlobalStyles />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;

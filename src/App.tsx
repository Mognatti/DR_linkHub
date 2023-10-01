import Main from "./components/Main";
import { Global } from "./styles/Global";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global />
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;

import { ThemeProvider, createGlobalStyle } from "styled-components";
import Author from "./components/Author";
import Todo from "./components/Todo";

const theme = {
  colors: {
    background: "#5A639C",
    primary: "#ef7360",
    textPrimary: "#538392",
    textSecondary: "#240750",
  },
};

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  .App {
    margin: 0;
  padding: 50px;
  background-color: ${(props) => props.theme.colors.background};
  font-weight: 500;
  font-size: 1.2rem;
  height: 100vh;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Todo />
        <Author />
      </div>
    </ThemeProvider>
  );
}

export default App;

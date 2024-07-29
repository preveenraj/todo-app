import { useReducer } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Author from "./components/Author";
import Todo from "./components/Todo";
import SignIn from "./components/SignIn";
import authReducer from "./reducer/userActions/AuthReducer";

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
  const [{ user }, dispatch] = useReducer(authReducer, authReducer.initialState);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        {user ? <Todo /> : <SignIn dispatch={dispatch} />}
        <Author />
      </div>
    </ThemeProvider>
  );
}

export default App;

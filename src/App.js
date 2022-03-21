import { ApolloProvider } from "@apollo/client";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import client from "./client/index.js";
import Header from "./components/header.js";
import Character from "./pages/character/index.js";
import Characters from "./pages/characters.js";
import Episode from "./pages/episode/index.js";
import Episodes from "./pages/episodes.js";
import Login from "./pages/login.js";
import Starship from "./pages/starship.js";
import ProtectedRoute from "./protectedRoute.js";
import "./styles/font/font.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import themes from "./styles/themes.js";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={themes[theme]}>
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>

            <ProtectedRoute path="/episodes">
              <Header theme={theme} setTheme={setTheme} />
              <Episodes />
            </ProtectedRoute>

            <ProtectedRoute path="/episode/:id">
              <Header theme={theme} setTheme={setTheme} />
              <Episode />
            </ProtectedRoute>

            <ProtectedRoute path="/characters/:id">
              <Header theme={theme} setTheme={setTheme} />
              <Character />
            </ProtectedRoute>

            <ProtectedRoute path="/characters">
              <Header theme={theme} setTheme={setTheme} />
              <Characters />
            </ProtectedRoute>

            <ProtectedRoute path="/starships/:id">
              <Header theme={theme} setTheme={setTheme} />
              <Starship />
            </ProtectedRoute>

            <ProtectedRoute path="/">
              <Header theme={theme} setTheme={setTheme} />
              <Episodes />
            </ProtectedRoute>
          </Switch>
        </Router>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;

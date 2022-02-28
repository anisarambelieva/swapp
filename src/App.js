import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import client from "./client/index.js";
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
import theme from "./styles/theme.js";

const App = () => (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <ProtectedRoute path="/episodes">
            <Episodes />
          </ProtectedRoute>

          <ProtectedRoute path="/episode/:id">
            <Episode />
          </ProtectedRoute>

          <ProtectedRoute path="/characters/:id">
            <Character />
          </ProtectedRoute>

          <ProtectedRoute path="/characters">
            <Characters />
          </ProtectedRoute>

          <ProtectedRoute path="/starships/:id">
            <Starship />
          </ProtectedRoute>

          <ProtectedRoute path="/">
            <Episodes />
          </ProtectedRoute>
        </Switch>
      </Router>
    </ApolloProvider>
  </ThemeProvider>
);

export default App;

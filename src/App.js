import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Character from './pages/character/index.js';
import Characters from './pages/characters.js';
import Episode from './pages/episode/index.js';
import Episodes from './pages/episodes.js';
import Login from './pages/login.js';
import Starship from './pages/starship.js';

import './styles/font/font.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://softuni-swapp-1283332882.eu-west-1.elb.amazonaws.com/graphql",
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/episodes">
          <Episodes />
        </Route>

        <Route path="/episode/:id">
          <Episode />
        </Route>

        <Route path="/characters/:id">
          <Character />
        </Route>

        <Route path="/characters">
          <Characters />
        </Route>

        <Route path="/starships/:id">
          <Starship />
        </Route>

        <Route path="/">
          <Episodes />
        </Route>
      </Switch>
    </Router>
  </ApolloProvider>
);

export default App;

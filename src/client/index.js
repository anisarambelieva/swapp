import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

import authLink from "./auth";

const httpLink = createHttpLink({
  uri: "http://softuni-swapp-1283332882.eu-west-1.elb.amazonaws.com/graphql",
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://softuni-swapp-1283332882.eu-west-1.elb.amazonaws.com/graphql",
  cache: new InMemoryCache(),
});

export default client;

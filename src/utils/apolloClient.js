import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import Constants from "expo-constants";

const httpLink = createHttpLink({
  // Replace the IP address part with your own IP address!
  //uri: "http://192.168.68.125:4000/graphql",
  uri: Constants.expoConfig.extra.APOLLO_URI,
});

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;

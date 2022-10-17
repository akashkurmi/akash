import fetch from "cross-fetch"
import {
     InMemoryCache, 
    ApolloProvider,
    ApolloClient,
     gql,
     HttpLink
     } from '@apollo/client';

export const client = new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:4047/graphql',fetch }),
    cache: new InMemoryCache(),
  });
import { InMemoryCache, ApolloProvider,ApolloClient, gql } from '@apollo/client';


export const client = new ApolloClient({
    uri: 'http://localhost:4047/graphql',
    cache: new InMemoryCache(),
  });
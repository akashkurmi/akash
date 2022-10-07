import Link from 'next/link'
import UsersData from '../components/UsersData'
import { InMemoryCache, ApolloProvider,ApolloClient, gql } from '@apollo/client';
import { Container } from '@mui/system';
import Navbar from '../components/navbar';
// import { ApolloClient } from 'apollo-client';

// import Alert from 'react-bootstrap/Alert';
const client = new ApolloClient({
  uri: 'http://localhost:4047/graphql',
  cache: new InMemoryCache(),
});
export default () => (

  <div >
    <Navbar></Navbar>
    <Container maxWidth="lg" style={{marginTop :"70px",marginBottom:"40px"}}>
   <ApolloProvider client={client}> 
    <UsersData ></UsersData>
   </ApolloProvider>
   </Container>
  </div>
)

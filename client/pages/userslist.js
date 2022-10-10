import Link from 'next/link'
import UsersData from '../components/UsersData'
import { Container } from '@mui/system';
import Navbar from '../components/navbar';

import {  ApolloProvider } from '@apollo/client';
import {client} from '../lib/apollo-client'

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

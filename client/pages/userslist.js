import { Container } from '@mui/system';
import {  ApolloProvider } from '@apollo/client';
import {client} from '../lib/apollo-client'
import { lazy, Suspense } from 'react';
import Link from 'next/link'
import UsersData from '../components/UsersData'
import Navbar from '../components/navbar';

// const UsersData =lazy(()=>import("../components/UsersData"))

export default () => (

  <div >
    <Navbar></Navbar>
    <Container maxWidth="lg" style={{marginTop :"70px",marginBottom:"40px"}}>
   <ApolloProvider client={client}> 
   {/* <Suspense fallback={<div>loading..</div>} > */}
    <UsersData ></UsersData>
   {/* </Suspense> */}
   </ApolloProvider>
   </Container>
  </div>
)

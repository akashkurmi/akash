import Link from 'next/link'
import WithApollo from '../lib/with-apollo'
import Name from '../components/Name'
import { Container } from '@mui/material'

const Page = () => (
  <div>
    <Container maxWidth="md"  style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}>
<h1>
  
</h1>
    Welcome to,
    
    <h1><Link href="/userslist"><a>Users List</a></Link></h1>
    </Container>

  </div>
)

export default Page

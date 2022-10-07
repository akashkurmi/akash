import {gql} from '@apollo/client'

export const userList=gql`
query{
    User{
      name,
      address,
      phone,
      email
    }
  }
`
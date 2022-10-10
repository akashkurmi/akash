import {useQuery} from '@apollo/client'
import {userList} from './graphql/query'

export function fetchdata(){
    var {error,loading,data}= useQuery(userList);
    if(data)
    return data.User;
    else
    return error;
}
import { useEffect, useState } from "react"
import UserCard from "./modules/UserCard"
import {useQuery} from '@apollo/client'
import {userList} from './graphql/query'
import { Box } from "@mui/system";
import {  LinearProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";


function UsersData(){
    var {error,loading,data}= useQuery(userList);
    const [stateData, setStateData]=useState();
    const [disData, setDisData]=useState(1);
    
    useEffect(()=>{
        console.log(data,error);
        if(data)
        setStateData(data.User.slice(0,20));
    },[data,error])
   
    const fetchMoreData=()=>{
        let start=20*disData;
        let end=20*disData+20;
        setStateData(stateData.concat(data.User.slice(start,end)));
        setDisData(disData+1)
    }

    return(
        <div>
            
            {!stateData?
            <LinearProgress />
            :
            <InfiniteScroll
          dataLength={stateData.length}
        //   next={fetchMoreData}
          hasMore={true}
          loader={<button onClick={fetchMoreData} 
          style={{
            width:"100px",
            height:"28px",
            backgroundColor:"black",
            color:"white",
            marginLeft:"45%",
            marginTop:"10px"
           }}>Load More</button>}>
            
            {stateData.map((e,i)=>{
                return(
                    <UserCard data={e} index={i} key={i}></UserCard>
                    )
                })}
                </InfiniteScroll>
                }

        </div>
    )
}

export default UsersData
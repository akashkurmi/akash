import { useEffect, useState } from "react"
import UserCard from "./modules/UserCard"
import {useLazyQuery, useQuery} from '@apollo/client'
import {userList} from './graphql/query'
import { Box } from "@mui/system";
import {  CircularProgress, LinearProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";


function UsersData(){
    const [getdata,{error,loading,data}]= useLazyQuery(userList);
    const [stateData, setStateData]=useState();
    const [disData, setDisData]=useState(1);
    const [loader, setloader]=useState(false);
    
    useEffect(()=>{
    getdata().then((res)=>{setStateData(res.data.User)}).catch(()=>{console.log(res)});
    console.log(error);
    },[])
   
    const fetchMoreData=()=>{
    if(disData<=200) 
        getdata().then((res)=>{
        setTimeout(() => {
          setStateData(stateData.concat( res.data.User));
          setloader(false)
          }, 1000);
    });
   
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
            loader={
                loader?
                <Box sx={{ display: 'flex' }}>
                <CircularProgress style={{marginLeft:"48%", marginTop:"10px"}}></CircularProgress> 
              </Box>
                 :<button 
                 onClick={()=>{
                    setloader(true);
                    fetchMoreData()}} 
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
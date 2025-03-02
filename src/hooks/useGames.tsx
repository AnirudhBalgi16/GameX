import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

export interface Platform{
    id:number;
    name:string;
    slug:string;
    
    
}

export interface Game{
    id:number;  
    name:string;
    background_image:string;
    parent_platforms:{platform:Platform}[];
    metacritic:string
}
interface FetchGamesResponse{
    count:number;
    results:Game[];
}
const useGames = () => {
   
    const[games,setGames]=useState<Game[]>([]);
    const[error,setError]=useState('');
    const[isLoading,setIsLoading]=useState(false);
 

    useEffect(()=>{
        const controller=new AbortController();
        setIsLoading(true)
        apiClient.get<FetchGamesResponse>('/games',{signal:controller.signal})
        .then(res=>{
            setGames(res.data.results)
        setIsLoading(false)})
       .catch(err=>{
        if (err.name === 'AbortError') return
        setError(err.message)
        setIsLoading(false)})
 },[]) 
 return {games,error,isLoading}
}
export default useGames
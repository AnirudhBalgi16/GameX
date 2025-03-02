import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";


interface Game{
    id:number;  
    name:string;
}
interface FetchGamesResponse{
    count:number;
    results:Game[];
}
const useGames = () => {
    const controller=new AbortController();

    const[games,setGames]=useState<Game[]>([]);
    const[error,setError]=useState('');

    useEffect(()=>{
        apiClient.get<FetchGamesResponse>('/games',{signal:controller.signal})
        .then(res=>setGames(res.data.results))
       .catch(err=>{
        if (err.name === 'AbortError') return
        setError(err.message)})
 },[]) 
 return {games,error}
}
export default useGames
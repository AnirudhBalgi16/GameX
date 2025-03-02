import useData from "../hooks/useData"

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

const useGames = () => useData<Game>('/games');

export default useGames
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";

export interface Genre{
    id:number;
    name:string;

}
 interface FetchDataResponse<T> {
    count: number;
    results: T[];
}

const useData = <T extends object>(endpoint: string, requestConfig?:AxiosRequestConfig, deps?:unknown[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);
        apiClient.get<FetchDataResponse<T>>(endpoint, { signal: controller.signal ,...requestConfig})
            .then(res => {
                setData(res.data.results); // Corrected to setData
                setIsLoading(false);
            })
            .catch(err => {
                if (err.name === 'AbortError' || err.code === 'ERR_CANCELED') {
                    console.log('Request was canceled');
                    return;
                }
                setError(err.message);
                setIsLoading(false);
            });

        return () => controller.abort(); 
    }, deps ? [...deps]: []); 

    return { data, error, isLoading };
}

export default useData; // Corrected export statement
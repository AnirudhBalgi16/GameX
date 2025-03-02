import axios from "axios"

 export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        
        key:'67ae66d3abd541e38a0ebbf1a61a1e80'
    }
})
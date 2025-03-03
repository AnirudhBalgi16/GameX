import { Input } from '@chakra-ui/react'
import {useRef} from  'react'

interface Props{
    onSearch:(searchText:string)=>void
}
const SearchInput = ({onSearch}:Props) => {
   const ref= useRef<HTMLInputElement>(null)
  return (
    <form onSubmit={(event)=>{
        event.preventDefault();
        if(ref.current){
            onSearch(ref.current.value)
        }

    }}>
        <Input ref={ref} variant="subtle" borderRadius={20} placeholder="Search Games..." >
        </Input>
    </form>
                                
  )
}

export default SearchInput
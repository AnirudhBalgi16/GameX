import { Grid,GridItem,  useBreakpointValue} from "@chakra-ui/react"
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";

function App() {
    const isLargeScreen = useBreakpointValue({ base: false, lg: true });
    const[selectGenre,setSelectedGenre] = useState<Genre |null>(null)

  return (
    
   <Grid templateAreas={`"nav nav" "aside main"`}>
    <GridItem area="nav" >
     <Navbar />
    </GridItem> 
    {isLargeScreen && (
        <GridItem area="aside"paddingX={2} >
         <GenreList onSelectGenre={(genre)=>setSelectedGenre(genre)}/>
        </GridItem>
      )} 

    <GridItem area="main" >
      <GameGrid selectedGenre={selectGenre} />
    </GridItem>
   </Grid>
  )
}

export default App

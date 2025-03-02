import { Grid,GridItem,  useBreakpointValue} from "@chakra-ui/react"
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
    const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  return (
    
   <Grid templateAreas={`"nav nav" "aside main"`}>
    <GridItem area="nav" >
     <Navbar />
    </GridItem> 
    {isLargeScreen && (
        <GridItem area="aside" >
         <GenreList />
        </GridItem>
      )} 

    <GridItem area="main" >
      <GameGrid />
    </GridItem>
   </Grid>
  )
}

export default App

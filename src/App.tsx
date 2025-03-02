import { Grid,GridItem,  useBreakpointValue} from "@chakra-ui/react"
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

function App() {
    const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  return (
    
   <Grid templateAreas={`"nav nav" "aside main"`}>
    <GridItem area="nav" >
     <Navbar />
    </GridItem> 
    {isLargeScreen && (
        <GridItem area="aside" bg="white">
         
        </GridItem>
      )} 

    <GridItem area="main" >
      <GameGrid />
    </GridItem>
   </Grid>
  )
}

export default App

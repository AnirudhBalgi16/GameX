import { Grid, GridItem, useBreakpointValue, Box, HStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import { Platform } from "./hooks/useGames";
import PlatformSelector from "./components/PlatformSelector";
import SortSelctor from "./components/SortSelctor";
import GameHeading from "./components/GameHeading";


export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid templateAreas={`"nav nav" "aside main"`}>
      <GridItem area="nav">
        <Navbar onSearch={(searchText)=>setGameQuery({...gameQuery,searchText })} />
      </GridItem>
      {isLargeScreen && (
        <GridItem area="aside" paddingX={2}>
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      )}

      <GridItem area="main">
        <GameHeading gameQuery={gameQuery} />
        <HStack gap={6} marginBottom={3}>
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onSelectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
        />
        <SortSelctor currentSort={gameQuery.sortOrder} onselectOrder={(sortOrder)=>setGameQuery({...gameQuery,sortOrder})} />
        </HStack>
        
        <Box marginY={3}>
          <GameGrid gameQuery={gameQuery} />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;

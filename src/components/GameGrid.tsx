import useGames from "@/hooks/useGames"
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
   
    const {games,error}=useGames();
  return (
    <>
    {error && <p>Error: {error}</p>}
    <SimpleGrid columns={{sm:1, md:2,lg:3,xl:5,}} gap={3}>
      {games.map(game=>(
      <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  </>
  )
}

export default GameGrid
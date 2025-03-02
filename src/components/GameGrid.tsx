import useGames from "@/hooks/useGames"
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
   
    const {games,error,isLoading}=useGames();
    const Skeletons=[1,2,3,4,5,6]
  return (
    <>
    {error && <p>Error: {error}</p>}
    <SimpleGrid columns={{sm:1, md:2,lg:3,xl:4,}} gap={70} columnGap={30}>
        {isLoading && Skeletons.map((skeleton)=>(
            <GameCardSkeleton key={skeleton} />
        ))}
      {games.map(game=>(
      <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  </>
  )
}

export default GameGrid
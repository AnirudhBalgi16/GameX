import {Game} from "@/hooks/useGames"
import { Card, CardBody, Heading } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react"
import PlatformIconList from "./PlatformIconList";


interface Props{
    game: Game
}
const GameCard = ({game}:Props) => {
  return (
   <Card.Root overflow='hidden' borderTopRadius={10} borderBottomRadius={10}>
    <Image src={game.background_image} alt={game.name} />
    <CardBody >
        <Heading fontSize='2xl'>{game.name}</Heading>
        <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
    </CardBody>
   </Card.Root>
  )
}

export default GameCard
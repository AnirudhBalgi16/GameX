import {Game} from "@/hooks/useGames"
import { Card, CardBody, HStack, Heading } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react"
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "./image-url"


interface Props{
    game: Game
}
const GameCard = ({game}:Props) => {
  return (
   <Card.Root overflow='hidden' borderTopRadius={10} borderBottomRadius={10} width='295px' height='350px'>
    <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
    <CardBody >
        <Heading fontSize='2xl'>{game.name}</Heading>
        <HStack justifyContent='space-between'>
        <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
            <CriticScore score={parseInt(game.metacritic)} />
        </HStack>
    </CardBody>
   </Card.Root>
  )
}

export default GameCard
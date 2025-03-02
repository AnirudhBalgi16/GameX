import { Skeleton } from '@chakra-ui/react'
import { Card ,CardBody} from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card.Root width='300px' borderTopRadius={10} borderBottomRadius={10}  height='350px'>
        <Skeleton />
        <CardBody>
             
        </CardBody>
    </Card.Root>
  )
}

export default GameCardSkeleton
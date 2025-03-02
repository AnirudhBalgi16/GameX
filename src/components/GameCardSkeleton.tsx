import { Skeleton,SkeletonText } from "@/components/ui/skeleton"
import { Card ,CardBody} from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card.Root width='300px' borderTopRadius={10} borderBottomRadius={10}  height='350px'>
        <Skeleton />
        <CardBody>
        <SkeletonText noOfLines={2} />
        </CardBody>
    </Card.Root>
  )
}

export default GameCardSkeleton
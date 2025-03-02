import { HStack, List, ListItem, Text ,Image} from "@chakra-ui/react";
import useGenres from "@/hooks/useGenre";
import getCroppedImageUrl from "./image-url"
import { SkeletonText } from "@/components/ui/skeleton"

const GenreList = () => {
  const { data ,isLoading} = useGenres();
  if(isLoading) return <SkeletonText noOfLines={5} gap={4} />
  return (
    <List.Root>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY={5} > 
            <Image src={getCroppedImageUrl(genre.image_background)} alt={`${genre.name} genre`} boxSize="35px" borderRadius={8} />
            <Text fontSize='lg'>{genre.name}</Text>   
            </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;

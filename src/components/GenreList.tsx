import { HStack, List, ListItem ,Image,Button} from "@chakra-ui/react";
import useGenres from "@/hooks/useGenre";
import getCroppedImageUrl from "./image-url"
import { SkeletonText } from "@/components/ui/skeleton"
import { Genre } from "@/hooks/useGenre";

interface Props{
   onSelectGenre:(genre:Genre)=>void;
   selectedGenre:Genre | null;
}

const GenreList = ({onSelectGenre,selectedGenre}:Props) => {
  const { data ,isLoading} = useGenres();
  if(isLoading) return <SkeletonText noOfLines={5} gap={4} />
  return (
    <List.Root>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY={5} > 
            <Image src={getCroppedImageUrl(genre.image_background)} alt={`${genre.name} genre`} boxSize="35px" borderRadius={8} />
            <Button
              variant={ genre.id === selectedGenre?.id ? "solid" : 'ghost'}
              colorScheme= "gray"
              fontSize="lg"
              onClick={()=>onSelectGenre(genre)}
              
            > {genre.name}
            </ Button> 
            </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;

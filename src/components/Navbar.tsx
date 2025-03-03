import { HStack, Image, Flex, Box } from "@chakra-ui/react";
import logo from "../assets/Vite.js.png";
import { ColorModeButton } from "@/components/ui/color-mode";
import SearchInput from "./SearchInput";

interface Props{
  onSearch:(searchText:string)=>void
}
const Navbar = ({onSearch}:Props) => {
  return (
    <Flex padding="10px" width="100%" alignItems="center">
      <Box marginRight={2}>
        <HStack>
          <Image src={logo} boxSize="60px" />
        </HStack>
      </Box>

      <Box flex="1">
        <SearchInput onSearch={onSearch}/>
      </Box>

      <Box marginLeft={2}>
        <ColorModeButton />
      </Box>
    </Flex>
  );
};

export default Navbar;

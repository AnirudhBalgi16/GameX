import { HStack, Image} from '@chakra-ui/react'
import logo from '../assets/Vite.js.png'
import { ColorModeButton } from "@/components/ui/color-mode"



const Navbar = () => {
  
  return (
    <HStack justifyContent="space-between" padding='10px'>
        <Image src={logo} alt='logo' boxSize='40px' />
  
        <ColorModeButton />
    </HStack>
  )
}

export default Navbar
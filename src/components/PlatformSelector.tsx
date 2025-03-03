import { Button } from '@chakra-ui/react'
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
  } from "@/components/ui/menu"
import usePlatform from '@/hooks/usePlatform'
import { Platform } from '@/hooks/usePlatform'

interface Props{
    onSelectPlatform:(platform:Platform)=>void;
    selectedPlatform:Platform|null
}

const PlatformSelector = ({onSelectPlatform,selectedPlatform}:Props) => {
    const {data}=usePlatform()
  return (
    <>
    <MenuRoot>
    <MenuTrigger asChild>
      <Button variant="outline" size="sm">
       {selectedPlatform?.name || "Platform"}
       
      </Button>
    </MenuTrigger>
    <MenuContent>
      {data.map((platform)=>(
        <MenuItem value={platform.name} onClick={()=>onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
      ))}
     
    </MenuContent>
  </MenuRoot>
  </>
  )
}

export default PlatformSelector
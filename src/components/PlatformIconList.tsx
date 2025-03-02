import { Platform } from "@/hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons"; // Import IconType
import {
  FaWindows,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaAndroid,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

interface Props {
  platforms: Platform[];
}

const IconMap: Record<string, IconType> = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  android: FaAndroid,
  ios: MdPhoneIphone,
  web: BsGlobe,
};

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <>
    <HStack marginY='15px'>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={IconMap[platform.slug] || BsGlobe} // Ensure safe access
          color="gray.500"
        />
      ))}
    </HStack>
    </>
  );
};

export default PlatformIconList;

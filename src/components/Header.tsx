import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { MutableRefObject, useState } from "react";
import Sidebar from "./Sidebar.tsx";
type THeaderProps={
  isOpen:any;
  onOpen: any;
  onClose: any;
  btnRef: any
}
const Header:React.FC<THeaderProps> = ({isOpen,onOpen,onClose,btnRef}) => {
  const [toggleButton, setToggleButton] = useState(false);
  const openToggleButton = () => {
    setToggleButton(!toggleButton);
  };
  return (
    <Flex padding={20} justifyContent={"space-between"} alignItems={"center"}>
      <HStack gap={20}>
        <HamburgerIcon onClick={openToggleButton} ref={btnRef} />

        {toggleButton && <Sidebar />}
        <Image src="/assets/logo.png" alt="logo" width="150px" />
      </HStack>
      <HStack width="40%" justify="center">
        <InputGroup>
          <Input
            placeholder="Search..."
            width="100%"
            padding={10}
            borderWidth="1px 0 1px 1px"
            type="text"
            outline="none"
            borderRadius="20px 0 0 20px"
          />
          <IconButton
            icon={<SearchIcon />}
            aria-label={""}
            outline="none"
            padding={10}
            bg="transparent"
            borderWidth="1px 1px 1px 0"
            borderRadius="0 20px 20px 0"
          />
        </InputGroup>
      </HStack>
      <HStack gap={20}>
        <Button
          fontWeight={600}
          fontSize="16px"
          padding="10px 20px"
          borderRadius={20}
          bg="white"
          color="#2D4F8F"
          borderColor="#2D4F8F"
          _hover={{ color: "white", bg: "#2D4F8F" }}
        >
          Sign in
        </Button>
        <Button
          fontWeight={600}
          fontSize="16px"
          padding="10px 20px"
          borderRadius={20}
          bg="white"
          color="#2D4F8F"
          borderColor="#2D4F8F"
          _hover={{ color: "white", bg: "#2D4F8F" }}
        >
          Sign up
        </Button>
      </HStack>
    </Flex>
  );
};

export default Header;

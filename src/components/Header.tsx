import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import React, { MutableRefObject, useState } from "react";
import Sidebar from "./Sidebar.tsx";

const Header= () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () =>{
    setMenuOpen(!menuOpen);
  }
  return (
    <>
    <Flex padding={20} justifyContent={"space-between"} alignItems={"center"} width="100%" >
      <HStack gap={20}>
        <HamburgerIcon  onClick={handleMenuClick}/>
        <Image src="/assets/logo.png" alt="logo" width="150px" />
      </HStack>
      <HStack width="40%" justify="center">
        <InputGroup >
          <Input
            placeholder="Search..."
            bg="#ECE7E7"
            width="100%"
            padding={10}
            borderWidth="0"
            type="text"
            outline="none"
            borderRadius="20px 0 0 20px"
            
          />
          <IconButton
            icon={<SearchIcon />}
            aria-label={""}
            outline="none"
            padding={10}
            bg="#ECE7E7"
            borderWidth="0"
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
    {menuOpen && <Sidebar/>}
    </>
  );
};

export default Header;

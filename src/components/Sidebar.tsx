import {
  HStack,
  Heading,
  IconButton,
  VStack,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Button,
  useDisclosure,
  Box,
  Grid,
} from "@chakra-ui/react";
import React, { MutableRefObject } from "react";
import sidebarData from "./data.json";

const Sidebar = () => {
  return (
    <VStack width="15%" alignItems={"flex-start"} padding={20} gap={20} mt={10}>
      {sidebarData.sidebar.map((sidebarItem) => (
        <>
          <Heading fontSize={14} color="#BCBABA">{sidebarItem.sidebarTitle}</Heading>
          <VStack alignItems={"flex-start"}>
            {sidebarItem.sidebarList.map((listItem, index) => (
              <Text key={index} fontSize={16} _hover={{fontWeight:"600"}} cursor={"pointer"}>{listItem}</Text>
            ))}
          </VStack>
        </>
      ))}
    </VStack>
  );
};

export default Sidebar;

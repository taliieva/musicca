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
} from "@chakra-ui/react";
import React, { MutableRefObject } from "react";
import sidebarData from "./data.json";
const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: MutableRefObject<SVGSVGElement | null> = React.useRef(null);
  return (
    // <VStack>
    //   <VStack>
    //     {sidebarData.sidebar.map((sidebarItem) => (
    //       <>
    //         <Heading>{sidebarItem.sidebarTitle}</Heading>
    //         <VStack>
    //           {sidebarItem.sidebarList.map((listItem, index) => (
    //             <Text key={index}>{listItem}</Text>
    //           ))}
    //         </VStack>
    //       </>
    //     ))}
    //   </VStack>
    // </VStack>
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create your account</DrawerHeader>

        <DrawerBody>
          <Input placeholder="Type here..." />
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;

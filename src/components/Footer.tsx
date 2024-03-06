import { Flex, HStack, Heading, VStack, Text, Link } from "@chakra-ui/react";
import React from "react";
import footerData from "./data.json";
const Footer = () => {
  return (
    <HStack
      bg="black"
      color="white"
      alignItems="flex-start"
      justifyContent="center"
      gap="60px"
      padding="40px"
      width="100%"
    >
      {footerData.footer.map((list) => (
        <VStack key={list.id} alignItems="flex-start">
          <Heading mb="20px" color="gray">{list.title}</Heading>

          {list.list.map((item, index) => (
            <Link key={index} _hover={{color:"#2D4F8F"}} cursor={"pointer"}>{item}</Link>
          ))}
        </VStack>
      ))}
    </HStack>
  );
};

export default Footer;

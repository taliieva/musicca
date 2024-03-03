import React from "react";
import {
  VStack,
  Text,
  Heading,
  Image,
  HStack,
  Flex,
  Box,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Flex alignItems="center">
      <VStack m={50} width="100%">
        <Heading>Features</Heading>
        <Slider {...settings}>
          <Box width={30} height={30}>
            <Image src="/assets/features1.png" />
          </Box>
          <Box width={30} height={30}>
            <Image src="/assets/features2.png" />
          </Box>
          <Box width={30} height={30}>
            <Image src="/assets/features3.png" />
          </Box>
          <Box width={30} height={30}>
            <Image src="/assets/features4.png" />
          </Box>
          <Box width={30} height={30}>
            <Image src="/assets/features5.png" />
          </Box>
        </Slider>
      </VStack>
    </Flex>
  );
}

export default Home;

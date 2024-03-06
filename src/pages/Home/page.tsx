import React from "react";
import { VStack, Text, Heading, Flex, Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

function Home() {
  return (
    <Flex alignItems="center" width="100%" justifyContent="center">
      <VStack m={50} width="100%">
        <Heading>Features</Heading>
        <Box width="600px">
          <div style={{ overflow: "hidden" }}> {/* Swiper'ı bir div içine alın */}
            <Swiper
              spaceBetween={30}
              slidesPerView={4}
              navigation
              autoplay={{ delay: 3000 }} allowTouchMove
            >
              <SwiperSlide>
                <img src="/assets/features1.png" alt="Image 1" style={{ width: "100%" }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/features2.png" alt="Image 2" style={{ width: "100%" }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/features3.png" alt="Image 3" style={{ width: "100%" }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/features4.png" alt="Image 4" style={{ width: "100%" }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/features5.png" alt="Image 5" style={{ width: "100%" }} />
              </SwiperSlide>
            </Swiper>
          </div>
        </Box>
      </VStack>
    </Flex>
  );
}

export default Home;

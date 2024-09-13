import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import Hero from "../../assets/group16x9.jpg";

const HeroSection = () => {
  return (
    <Box
      width="100%"
      height={["80vh", "100vh"]}
      backgroundImage={`url(${Hero})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      color="white"
      py={["20px", "40px"]}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 0, 0, 0.4)"
        zIndex="1"
      />
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        px={["20px", "40px"]}
        py={["20px", "40px"]}
        zIndex="2"
      >
        <Heading
          width={["100%", "80%", "65%"]}
          fontSize={["2xl", "4xl", "5xl"]}
          mb="4"
          fontWeight="bold"
        >
          Transform Your Brand with Cutting-Edge Digital Marketing
        </Heading>
        <Text
          width={["100%", "80%", "60%"]}
          fontSize={["md", "lg", "xl"]}
          mb="6"
        >
          In a world where digital presence is everything, we’re here to help
          your brand shine. At ChakraPage, we specialize in crafting impactful
          digital marketing strategies that elevate your brand, engage your
          audience, and drive measurable results.
        </Text>
        <Button size="lg" colorScheme="teal" variant="solid">
          Explore more
        </Button>
      </Flex>
    </Box>
  );
};

export default HeroSection;

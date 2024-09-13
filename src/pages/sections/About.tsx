import { Box, Container, Image, Heading, Text, Button } from "@chakra-ui/react";
import AboutImg from "../../assets/man-on-laptop7x5.jpg";

const About = () => {
  return (
    <Box
      id="about"
      width="full"
      minHeight={["500px", "500px", "100vh"]}
      color="black"
      py={["20px", "40px"]}
    >
      <Container
        maxW="container"
        display="flex"
        flexDirection={["column-reverse", "column", "column-reverse", "row"]}
        alignItems="center"
        gap="2rem"
        justifyContent="space-between"
        height="100%"
        px={["4", "6", "6"]}
      >
        <Box
          width="100%"
          mr={[0, 0, 8]}
          mb={[6, 6, 0]}
          textAlign={["start", "center", "left"]}
        >
          <Heading mb="4" fontSize={["3xl", "3xl", "5xl"]}>
            About Us
          </Heading>
          <Text fontWeight="600" fontSize={["lg", "xl", "3xl"]} mb="4">
            Empowering Brands Through Digital Innovation
          </Text>
          <Text
            mb="8"
            width={["100%", "80%", "80%"]}
            fontSize={["md", "lg", "xl"]}
          >
            At ChakraPage, we believe in the transformative power of digital
            marketing to elevate brands and drive business growth. Our mission
            is to bridge the gap between businesses and their target audiences
            through innovative digital strategies tailored to your unique goals.
          </Text>
          <Button
            padding="2rem"
            fontSize="xl"
            bg="brand.700"
            color="white"
            _hover={{ bg: "brand.600" }}
          >
            Contact Us
          </Button>
        </Box>
        <Box width={["100%", "fit-content"]}>
          <Image
            src={AboutImg}
            alt="about-img"
            borderRadius="md"
            maxW={["300px", "400px", "500px"]}
            height="auto"
            objectFit="cover"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default About;

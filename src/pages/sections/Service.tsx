import {
  Box,
  Container,
  Heading,
  Image,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import ServiceImg from "../../assets/woman-at-board7x5.jpg";

const Service = () => {
  return (
    <Box
      width="full"
      id="service"
      minHeight="100vh"
      color="black"
      py={["20px", "40px"]}
    >
      <Container
        maxW="container"
        display="flex"
        flexDirection={["column", "column", "column", "row"]}
        gap="2rem"
        alignItems="center"
        justifyContent="space-between"
        height="100%"
        px={["4", "6", "6"]}
      >
        <Box width={["100%", "fit-content"]}>
          <Image
            src={ServiceImg}
            alt="service-image"
            borderRadius="md"
            maxW={["300px", "400px", "500px"]}
            height="auto"
            objectFit="cover"
          />
        </Box>
        <Box display="flex" alignItems="start" flexDirection="column">
          <Heading mb={4}>Our Services</Heading>
          <Text mb={4}>
            We provide the best digital marketing services to boost your
            business growth. Explore our wide range of services tailored to your
            needs.
          </Text>
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap={6}
            w="full"
          >
            <GridItem bg="gray.100" p={6} borderRadius="md" boxShadow="md">
              <Heading size="md" mb={2}>
                SEO Optimization
              </Heading>
              <Text>Enhance your website’s visibility on search engines.</Text>
            </GridItem>

            <GridItem bg="gray.100" p={6} borderRadius="md" boxShadow="md">
              <Heading size="md" mb={2}>
                Content Marketing
              </Heading>
              <Text>Create engaging content that drives results.</Text>
            </GridItem>

            <GridItem bg="gray.100" p={6} borderRadius="md" boxShadow="md">
              <Heading size="md" mb={2}>
                Social Media Marketing
              </Heading>
              <Text>Grow your brand with targeted social media campaigns.</Text>
            </GridItem>

            <GridItem bg="gray.100" p={6} borderRadius="md" boxShadow="md">
              <Heading size="md" mb={2}>
                Email Marketing
              </Heading>
              <Text>
                Connect with your audience through personalized emails.
              </Text>
            </GridItem>

            <GridItem bg="gray.100" p={6} borderRadius="md" boxShadow="md">
              <Heading size="md" mb={2}>
                PPC Advertising
              </Heading>
              <Text>Get fast results with pay-per-click advertising.</Text>
            </GridItem>

            <GridItem bg="gray.100" p={6} borderRadius="md" boxShadow="md">
              <Heading size="md" mb={2}>
                Influencer Marketing
              </Heading>
              <Text>
                Partner with influencers to grow your brand visibility.
              </Text>
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Service;

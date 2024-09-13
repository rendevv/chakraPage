import { Box, Text, Stack, Link, Divider } from "@chakra-ui/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box as="footer" bg="brand.700" color="white" py={6} px={4}>
      <Box maxW="container.xl" mx="auto" textAlign="center">
        <Stack
          direction={["column", "row"]}
          spacing={8}
          justify="center"
          mb={4}
        >
          <Link href="/" _hover={{ color: "teal.300" }}>
            Home
          </Link>
          <Link href="/about" _hover={{ color: "teal.300" }}>
            About
          </Link>
          <Link href="/services" _hover={{ color: "teal.300" }}>
            Services
          </Link>
          <Link href="/contact" _hover={{ color: "teal.300" }}>
            Contact
          </Link>
        </Stack>

        <Divider borderColor="gray.700" my={4} />

        {/* Footer Copyright */}
        <Text fontSize="sm" color="white">
          &copy; {currentYear} ChakraPage. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;

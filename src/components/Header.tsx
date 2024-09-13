import {
  Flex,
  Heading,
  Box,
  Spacer,
  Link,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  useMediaQuery,
} from "@chakra-ui/react";
import { HamburgerIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { links } from "../routes/link";

const Header = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 1080px)"); // Media query untuk layar lebih besar dari 768px

  return (
    <Flex
      px={["20px", "50px", "100px"]}
      py="20px"
      width="full"
      bg="brand.700"
      position="fixed"
      zIndex="99999"
      alignItems="center"
      color="white"
      justifyContent="space-between"
    >
      <Box>
        <Heading
          color="whiteAlpha.900"
          fontSize={["18px", "20px", "22px"]}
          letterSpacing="1.5px"
        >
          ChakraPage
        </Heading>
      </Box>
      <Spacer />
      {isLargerThan768 ? (
        <Flex>
          {links.map((link, index) => (
            <Box key={index} mx={4}>
              <Link
                href={link.link}
                fontSize={["14px", "16px"]}
                _hover={{ textDecoration: "underline" }}
              >
                {link.name}
              </Link>
            </Box>
          ))}
        </Flex>
      ) : (
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            {links.map((link, index) => (
              <MenuItem color="black" key={index} icon={<ExternalLinkIcon />}>
                <Link href={link.link} _hover={{ textDecoration: "underline" }}>
                  {link.name}
                </Link>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      )}
    </Flex>
  );
};

export default Header;

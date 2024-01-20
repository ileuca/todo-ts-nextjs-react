import { Box, Flex, Button } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      bg="transparent"
      color="white"
      padding="1rem"
      borderRadius="lg"
      justify="space-between"
      alignItems="center"
      boxShadow="xl"
      border={"2px solid #e2e8f0"}
      m={3}
      zIndex="1"
    >
      <Box fontSize="lg" fontWeight="bold">
        My Todo List
      </Box>

      <Box>
        <Button minW={"100px"} colorScheme="blackAlpha" variant="outline">
          Login
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;

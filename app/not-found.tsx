import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import Link from "next/link";

const NotFound = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    height="100vh"
  >
    <VStack spacing={4} textAlign="center">
      <Heading as="h1" size="2xl" color="red.500">
        404
      </Heading>
      <Text fontSize="xl">
        Sorry, the page you are looking for does not exist.
      </Text>
      <Link href="/">
        <Button>Go Back Home</Button>
      </Link>
    </VStack>
  </Box>
);

export default NotFound;

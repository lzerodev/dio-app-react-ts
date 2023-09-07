import { ChakraProvider, Text, Box, Container } from "@chakra-ui/react";

export const Header = () => {
  return (
    <ChakraProvider>
      <Box
        maxWidth="100vh"
        minHeight="5vh"
        padding={5}
        backgroundColor="#FFFFFF"
        shadow="lg"
        borderRadius={25}
      >
        <Container maxW="lg" centerContent>
          <Box
            backgroundColor="#7f28b5"
            borderRadius={25}
            padding="5px"
            margin="5px"
            maxWidth="100vh"
            shadow="lg"
          >
            <Container maxW="lg" centerContent>
              <Text as="b" 
              color="#FFFFFF" 
              fontSize="4xl" 
              fontWeight='semibold'
              letterSpacing='wide'
              textTransform='uppercase'
              fontFamily="Open Sans, sans-serif"
              >
                Dio Bank
              </Text>
            </Container>
          </Box>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

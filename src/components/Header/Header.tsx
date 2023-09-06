import { ChakraProvider, Text, Box, Container } from "@chakra-ui/react";

export const Header = () => {
  return (
    <ChakraProvider>
      <Box
        maxWidth="100%"
        minHeight="10vh"
        padding={10}
        backgroundColor="#FFFFFF"
        shadow="lg"
        borderRadius={30}
      >
        <Container maxW="lg" centerContent>
          <Box
            backgroundColor="#7f28b5"
            borderRadius={25}
            padding="5px"
            w="100%"
            margin="5px"
            maxWidth="100%"
            shadow="lg"
            display="flex"
            mt="2"
            alignItems="center"
          >
            <Container maxW="lg" centerContent>
              <Text as="b" 
              color="#FFFFFF" 
              fontSize="4xl" 
              fontWeight='semibold'
              letterSpacing='wide'
              textTransform='uppercase'
              ml='2'
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

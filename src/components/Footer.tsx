import { ChakraProvider, Text, Box, Container } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <ChakraProvider>
      <Container maxW="fit-content" centerContent>
        <Box
          backgroundColor=" #FFFFFF"
          borderRadius={25}
          padding="5px"
          margin="5px"
          maxWidth="100%"
          letterSpacing='wider'
          shadow="lg"
        >
          <Container maxW="lg" centerContent>
            <Text color="#7f28b5" fontSize="2xl"
            fontWeight='semibold'
            >
              Copyrights 2023 
            </Text>
            <Text color="#7f28b5" fontSize="1xl">
              Made by LMZ
            </Text>
          </Container>
        </Box>
        </Container>
    </ChakraProvider >
  );
};

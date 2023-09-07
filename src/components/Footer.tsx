import { ChakraProvider, Text, Box, Container } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <ChakraProvider>
        <Box
          backgroundColor=" #FFFFFF"
          borderRadius={25}
          padding="5px"
          margin="0px"
          maxWidth="100vh"
          letterSpacing='wide'
        >
          <Container maxW="lg" centerContent>
            <Text color="#7f28b5" fontSize="3xl">
              CopyRights 2023 
            </Text>
            <Text color="#7f28b5" fontSize="1xl">
              Made by LMZ
            </Text>
          </Container>
        </Box>
    </ChakraProvider >
  );
};

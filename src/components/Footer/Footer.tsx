import { ChakraProvider, Text, Box, Container } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <ChakraProvider>
      <Box
        maxWidth="100%"
        minHeight="10vh"
        padding={5}
        backgroundColor="#FFFFFF"
        shadow="lg"
        borderRadius={25}
        >
        <Box
          backgroundColor=" #FFFFFF"
          borderRadius={25}
          padding="5px"
          w="100%"
          margin="0px"
          maxWidth="100%"
          display='flex'
          mt='0.5'
          alignItems='center'
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
      </Box>
    </ChakraProvider >
  );
};

import {
  Center,
  ChakraProvider,
  Input,
  Text,
  Box,
  Button,
  PinInputField,
  PinInput,
  HStack,
  Container,
} from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box
        maxWidth="100hv"
        minHeight="100vh"
        backgroundColor="#7f28b5"
        padding="25px"
        shadow="lg"
      >
        <Container maxW="md" centerContent>
          <Box
            backgroundColor="#FFFFFF"
            borderRadius="25px"
            padding="15px"
            margin="200px"
            maxWidth="600px"
            shadow="lg"
          >
            <Center>
              <Text fontSize="2xl" marginBottom={5}>
                Faça o login
              </Text>
            </Center>
            <Center>
              <Input placeholder="email" size='lg' marginBottom={5} />
            </Center>
            <Center>
              <HStack marginBottom={5}>
                <PinInput type="alphanumeric" mask size="lg">
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </Center>
            <Center>
              <Button
                colorScheme="purple"
                size="md"
                width="100%"
                marginTop="10px"
              >
                Login
              </Button>
            </Center>
          </Box>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;

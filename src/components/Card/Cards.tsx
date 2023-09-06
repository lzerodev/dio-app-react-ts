import {
  Center,
  ChakraProvider,
  Input,
  Text,
  Box,
  PinInputField,
  PinInput,
  HStack,
  Container,
} from "@chakra-ui/react";

import { ButtonLogin } from "../Buttons/ButtonLogin";

interface ICard {
  id: number;
  title: string;
  event(): void;
}

export const Cards = ({ id, title, event }: ICard) => {
  console.log(id);
  return (
    <ChakraProvider>
      <Box
        backgroundColor="#7f28b5"
        padding={10}
        w="100%"
        maxWidth="100%"
        h="100%"
        shadow="lg"
      >
        <Container maxW="fit-content" centerContent borderRadius={25}>
          <Box
            backgroundColor="#FFFFFF"
            borderRadius="25px"
            padding="50px"
            margin="100px"
            shadow="lg"
          >
            <Center>
              <Text
                fontSize="3xl"
                marginBottom={8}
                fontFamily="Open Sans, sans-serif"
              >
                {title}
              </Text>
            </Center>
            <Center>
              <Input
                placeholder="email"
                size="lg"
                marginBottom={5}
                shadow="lg"
              />
            </Center>
            <Center>
              <HStack marginBottom={5}>
                <PinInput type="alphanumeric" mask size="lg">
                  <PinInputField shadow="lg" />
                  <PinInputField shadow="lg" />
                  <PinInputField shadow="lg" />
                  <PinInputField shadow="lg" />
                </PinInput>
              </HStack>
            </Center>
            <Center>
              <ButtonLogin id={1} title="Login" event={event} />
            </Center>
          </Box>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

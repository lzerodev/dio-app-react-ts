import {
  Center,
  Input,
  Text,
  Box,
  PinInputField,
  PinInput,
  HStack,
  Container,
} from "@chakra-ui/react";
import { useState } from "react";
import { ButtonLogin } from "../Buttons/ButtonLogin";
import { login } from "../../services/login";




export const Cards = () => {
  const [email, setEmail] = useState<string>("");

  return (

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
              Faça o login
            </Text>
          </Center>
          <Center>
            <Input
              placeholder="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
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
            <ButtonLogin onClick={() => login(email)} />
          </Center>
        </Box>
      </Container>

  );
};

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
import { useState, useEffect } from "react";
import { ButtonLogin } from "../Buttons/ButtonLogin";
import { login } from "../../services/login";
import { api } from "../../api";

interface UserData {
  email: string;
  password: string;
  name: string;
}

export const Cards = () => {
  const [email, setEmail] = useState<string>("");
  const [userData, setUserData] = useState<null | UserData>();

  useEffect(() => {
    const getData = async () => {
      const data = await api;
      setUserData(data);
    };
    getData();
  }, []);

  return (
    <Box
      backgroundColor="#7f28b5"
      padding={10}
      w="100%"
      maxWidth="100%"
      h="100%"
      shadow="lg"
    >
      {userData === null || userData === undefined ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Informações carregadas</h1>
      )}

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
              Faça o login,
              <br></br>
              {userData?.name}
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
    </Box>
  );
};

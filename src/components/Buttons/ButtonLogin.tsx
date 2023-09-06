import { ChakraProvider, Text, Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";


interface IButton {
  onClick: MouseEventHandler
}

export const ButtonLogin = ({ onClick }: IButton) => {
  return (
    <ChakraProvider>
      <Button
        onClick={onClick}
        colorScheme="purple"
        size="md"
        width="100%"
        marginTop="10px"
        shadow="lg"
        loadingText='Loging in...'
      >
        <Text fontSize={20}>Login</Text>
      </Button>
    </ChakraProvider>
  );
};

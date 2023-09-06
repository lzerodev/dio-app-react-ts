import { ChakraProvider, Text, Button } from "@chakra-ui/react";

interface IButton {
  id: number;
  title: string;
  event(): void;
}

export const ButtonLogin = ({ id, title, event }: IButton) => {
  console.log(id);
  return (
    <ChakraProvider>
      <Button
        colorScheme="purple"
        size="md"
        width="100%"
        marginTop="10px"
        onClick={event}
        shadow="lg"
        loadingText='Loging in...'
      >
        <Text fontSize={20}>{title}</Text>
      </Button>
    </ChakraProvider>
  );
};

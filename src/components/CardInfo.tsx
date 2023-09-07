import { Box, Text } from "@chakra-ui/react";

interface ICardInfo {
  mainContent: string;
  content: string;
}

const CardInfo = ({ mainContent, content }: ICardInfo) => {
  return (
    <Box
      backgroundColor="white"
      minHeight="220px"
      w="220px"
      padding={15}
      borderRadius={25}
    >
      <Text fontSize="2xl" fontWeight="bold">
        {mainContent}
      </Text>
      <Text fontSize="x1">{content}</Text>
    </Box>
  );
};

export default CardInfo;

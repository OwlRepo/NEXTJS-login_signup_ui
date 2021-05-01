import { Heading } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import SVGBanner from "../../../public/vrchat.svg";
import { Box } from "@chakra-ui/layout";
export default function Banner() {
  return (
    <Flex flex={1} flexDirection="column" alignItems="center">
      <SVGBanner />
      <Box>
        <Text>GET TOGETHER SAFELY WITH</Text>
        <Heading fontSize="50">VIRTUAL REALITY</Heading>
      </Box>
    </Flex>
  );
}

import { Button } from "@chakra-ui/button";
import { FormHelperText } from "@chakra-ui/form-control";
import { FormLabel } from "@chakra-ui/form-control";
import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Spacer } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import Head from "next/head";
import Colors from "../src/Constants/Colors";
import styles from "../styles/Home.module.css";
import SVGBanner from "../public/vrchat.svg";
import { Image } from "next/image";
import { Box } from "@chakra-ui/layout";
export default function Home() {
  return (
    <Flex flexDirection="row">
      <Flex flex={1} flexDirection="column" alignItems="center">
        <SVGBanner />

        <Box>
          <Text>GET TOGETHER SAFELY WITH</Text>
          <Heading fontSize="50">VIRTUAL REALITY</Heading>
        </Box>
      </Flex>

      <Flex flex={1} flexDirection="column">
        <VStack marginTop="10">
          <Heading>WELCOME!</Heading>
          <Text>Please sign in to continue...</Text>
        </VStack>

        <Flex
          marginTop="10"
          paddingRight="24"
          paddingLeft="24"
          flexDirection="column"
        >
          <Flex
            flexDirection="column"
            shadow="md"
            padding="10"
            borderRadius="lg"
          >
            <FormControl id="email">
              <Input type="email" placeholder="Email" />
            </FormControl>
            <br />
            <FormControl id="password">
              <Input type="password" placeholder="Password" />
            </FormControl>
            <br />
            <Button colorScheme="red" shadow="lg">
              LOG IN
            </Button>
          </Flex>

          <Flex flexDirection="row"></Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

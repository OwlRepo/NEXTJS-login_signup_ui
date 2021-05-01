import { Button } from "@chakra-ui/button";
import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import SocialAccLogin from "./SocialAccLogin";

export default function LoginForm() {
  return (
    <Flex flex={1} flexDirection="column" alignItems="center">
      <VStack marginTop="10">
        <Heading>WELCOME!</Heading>
        <Text>Please sign in to continue...</Text>
      </VStack>

      <Flex {...styleProps.formCardContainerWrapper}>
        <Flex {...styleProps.formCardContainer}>
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

        <SocialAccLogin />
      </Flex>
    </Flex>
  );
}

const styleProps = {
  formCardContainer: {
    flexDirection: "column",
    width: "25vw",
    shadow: "md",
    borderRadius: "lg",
    padding: "5",
  },
  formCardContainerWrapper: {
    marginTop: "10",
    flexDirection: "column",
  },
};

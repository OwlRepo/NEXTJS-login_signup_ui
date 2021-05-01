import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
export default function SocialAccLogin() {
  return (
    <Flex {...styleProps.socialAccLoginButtonsContainer}>
      <VStack spacing="5">
        <Text color="grey">Create account with</Text>
        <HStack spacing="10">
          <Button colorScheme="facebook" leftIcon={<FaFacebook />} width="32">
            Facebook
          </Button>
          <Button colorScheme="twitter" leftIcon={<FaTwitter />} width="32">
            Twitter
          </Button>
          <Button colorScheme="linkedin" leftIcon={<FaLinkedinIn />} width="32">
            LinkedIn
          </Button>
        </HStack>
      </VStack>
    </Flex>
  );
}

const styleProps = {
  socialAccLoginButtonsContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "20",
  },
};

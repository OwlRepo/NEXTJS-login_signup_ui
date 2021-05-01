import { Button } from "@chakra-ui/button";
import { Flex, Heading } from "@chakra-ui/layout";
import React from "react";
import Link from "next/link";
import Colors from "../../Constants/Colors";
export default function NavigationBar() {
  return (
    <Flex flexDirection="row" alignItems="center">
      <Flex flex={1} paddingLeft="5">
        <Link href="/">
          <Heading cursor="pointer" fontSize="70px">
            LOGO
          </Heading>
        </Link>
      </Flex>

      <Flex flex={1.5} justifyContent="space-around">
        <Link href="/">
          <Button variant="ghost">About Us</Button>
        </Link>

        <Link href="/">
          <Button variant="ghost">Pricing</Button>
        </Link>
        <Link href="/">
          <Button variant="ghost">Login</Button>
        </Link>
        <Link href="/signup">
          <Button colorScheme="red">SIGN UP</Button>
        </Link>
      </Flex>
    </Flex>
  );
}

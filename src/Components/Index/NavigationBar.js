import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import React from "react";
import Link from "next/link";
export default function NavigationBar() {
  return (
    <Flex flexDirection="row">
      <Link href="/login">
        <Button>Login</Button>
      </Link>
      <Link href="/">
        <Button>Index</Button>
      </Link>
    </Flex>
  );
}

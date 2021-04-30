import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Flex flexDirection="row">
      <Flex flex={1}>leftPanel</Flex>

      <Flex flex={1}>rightPanel</Flex>
    </Flex>
  );
}

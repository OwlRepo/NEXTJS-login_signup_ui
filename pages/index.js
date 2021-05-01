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
import LoginForm from "../src/Components/Login/LoginForm";
import Banner from "../src/Components/Login/Banner";
export default function Home() {
  return (
    <Flex flexDirection="row">
      <Banner />

      <LoginForm />
    </Flex>
  );
}

const styleProps = {
  formCardContainer: {
    flexDirection: "column",
    shadow: "md",
    padding: "10",
    borderRadius: "lg",
  },
};

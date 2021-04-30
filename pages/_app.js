import { ChakraProvider } from "@chakra-ui/react";
import NavigationBar from "../src/Components/Index/NavigationBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NavigationBar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

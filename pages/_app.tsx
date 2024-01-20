import "@/styles/globals.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Box
      style={{ minHeight: "100vh", height: "100%" }}
      backgroundImage={"url(/todobackground.jpg)"}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <ChakraProvider>
        <Component {...pageProps} />;
      </ChakraProvider>
    </Box>
  );
};

export default App;

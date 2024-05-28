"use client";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/Search/components/Hero";
import Body from "@/app/components/Body";
import Footer from "@/app/components/Footer";
import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "@/app/theme";

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        bgGradient="linear(to left, #000000 -2.92%, rgba(0, 0, 0, 0) 1000%)"
        height="100vh"
        minW={"100wv"}
      >
        <Navbar />
        <Hero />
      </Box>
      <Body />
      <Footer />
    </ChakraProvider>
  );
}

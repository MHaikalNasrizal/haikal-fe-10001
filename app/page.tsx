"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Body from "@/components/Body";
import Footer from "@/components/Footer";
import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "./theme";

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
       <Box
        bgGradient="linear(to left, #000000 -2.92%, rgba(0, 0, 0, 0) 1000%)"
        height="100vh"
      ><Navbar />
      <Hero /></Box>
      <Body />
      <Footer />

    </ChakraProvider>
  );
}

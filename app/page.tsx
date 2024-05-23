"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Link } from "@chakra-ui/next-js";
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
      <Link href="/about" color="blue.400" _hover={{ color: "blue.500" }}>
        About
      </Link>
    </ChakraProvider>
  );
}

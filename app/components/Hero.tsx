import { Box, Container, Text, Image, HStack, VStack } from "@chakra-ui/react";

export default function Hero({}) {
  return (
    <>
      <Container maxW={"3xl"}>
        <HStack
          spacing={6}
          as={Box}
          height={"260px"}
          padding={"2px"}
          marginBlock={"100px"}
        >
          <Image src="PlayButton.png" alt="Play Button" />
          <VStack>
            <Text
              color={"White"}
              margin={"10px"}
              padding={"10px"}
              fontSize={"72px"}
              width={"500px"}
            >
              Find your movies here!
            </Text>

            <Text color={"White"} padding={"10px"} fontSize={"14px"}>
              Explore our gallery full of exciting films from all around the
              globe only your yor entertainments. No hidden charges or
              disturbing ads.
            </Text>
          </VStack>
        </HStack>
      </Container>
    </>
  );
}

import {
  Box,
  Container,
  Text,
  Image,
  HStack,
  VStack,
  InputGroup,
  Input,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";
import { SearchIcon, CalendarIcon } from "@chakra-ui/icons";

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
              Search your movies here!
            </Text>

            <Box display="flex" alignItems="center" gap={2} mb={4}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.300" />}
                />
                <Input
                  type="text"
                  placeholder="Search by theatre..."
                  bg="white"
                  color="black"
                />
              </InputGroup>
              {
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CalendarIcon color="gray.300" />}
                  />
                  <Input type="date" bg="white" color="black" />
                </InputGroup>
              }
              <Button colorScheme="yellow">Search</Button>
            </Box>
          </VStack>
        </HStack>
      </Container>
    </>
  );
}

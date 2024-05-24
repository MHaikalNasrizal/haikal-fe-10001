import {
  Box,
  Container,
  Text,
  SimpleGrid,
  Stack,
  Input,
  IconButton,
  Grid,
  Flex,
  VStack,
  GridItem,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
export default function Hero() {
  return (
    <>
      <Container as={Stack} maxW="12xl" p={0}>
        <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} >
          <GridItem w='100%' >
            <Box bg="#3D3D3D" color="#E6E6E6" p={10} h="100%">
              <Stack spacing={6}>
                <Box>
                  <Text fontSize="2xl" fontWeight="bold">
                    PcariMovie
                  </Text>
                </Box>
                <Text fontSize="sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </Text>
                <Text fontSize="sm">
                 Join Newsletters
                </Text>
                <Stack direction="row">
                  <Input
                    placeholder="Insert your mail here"
                    bg="gray.700"
                    border={0}
                    _focus={{ bg: "gray.600" }}
                  />
                  <IconButton
                    bg="yellow.400"
                    color="white"
                    _hover={{ bg: "yellow.500" }}
                    aria-label="Subscribe"
                    icon={<EmailIcon />}
                  />
                </Stack>
              </Stack>
            </Box>
          </GridItem>
          <GridItem w='100%'>
            <Box bg={"#2E2E2E"} color="#E6E6E6" p={10}  h="100%">
              <Grid padding={4}>
                <GridItem>
                  <Box>
                    <Text fontWeight="500" fontSize="lg" mb={2}>
                      Product
                    </Text>
                    <Text>Movies</Text>
                    <Text>TV Show</Text>
                    <Text>Videos</Text>
                  </Box>
                </GridItem>
                <GridItem>
                  <Box>
                    <Text fontWeight="500" fontSize="lg" mb={2}>
                      Media Group
                    </Text>
                    <Text>Nice Studio</Text>
                    <Text>Nice News</Text>
                    <Text>Nice TV</Text>
                  </Box>
                </GridItem>
                <GridItem>
                  <Box>
                    <Text fontWeight="500" fontSize="lg" mb={2}>
                      Sitemap
                    </Text>
                    <Text>About</Text>
                    <Text>Careers</Text>
                    <Text>Press</Text>
                  </Box>
                </GridItem>
                <GridItem colSpan={3}>
                  <Box padding={3}>
                    <Stack direction="row" justify="no-wrap" spacing={5}>
                      <Text>8819 Ohio St. South Gate, California 90280</Text>
                      <Text>ourstudio@hello.com</Text>
                      <Text>+271 386-647-3637</Text>
                    </Stack>
                  </Box>
                </GridItem>
              </Grid>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}

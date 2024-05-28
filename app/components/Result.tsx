import {
  Container,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Grid,
  GridItem,
  Text,
  Image,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
export default async function Body() {
  const getMovies = async () => {
    const res = await fetch("http://localhost:3000/api/");
    return res.json();
  };

  const data = await getMovies();

  return (
    <>
      {data.moviesData.map((item, index) => (
        <Container
          maxW="12xl"
          minHeight={"100vh"}
          bgColor="#1E1E1E"
          color="#FFFFFF"
          centerContent
        >
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={5}
            bgColor={"#1E1E1E"}
            height={"100%"}
            alignContent={"end"}
            minHeight={"100vh"}
            w={"1233px"}
            maxW={"12xl"}
            color={"#FFFFFF"}
            mt={"130px"}
            p={"30px"}
          >
            <GridItem colSpan={3} key={`${item.Movie_ID}_${index}`}>
              <Text fontSize={"48px"}>Result</Text>
            </GridItem>
            <GridItem colSpan={2}>
              <Card
                h={"560px"}
                w={"817px"}
                bgGradient="linear(to top, #000000 -2.92%, rgba(0, 0, 0, 0) 370%)"
                color={"white"}
              >
                <CardBody>
                  <Stack mt="1" spacing="3">
                    <Button
                      variant="solid"
                      colorScheme="brand"
                      color={"black"}
                      h={6}
                      w={"90px"}
                    >
                      {item.Genre}
                    </Button>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Stack>
                    <Text>{item.Duration}</Text>
                    <Text>{item.Views}</Text>
                    <Heading>{item.Title}</Heading>
                  </Stack>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem key={`${item.Movie_ID}_${index}`}>
              <Card
                h={"560px"}
                w={"400px"}
                bgGradient="linear(to top, #000000 -2.92%, rgba(0, 0, 0, 0) 370%)"
                color={"white"}
              >
                <CardBody>
                  <Stack mt="1" spacing="3">
                    <Button
                      variant="solid"
                      colorScheme="brand"
                      color={"black"}
                      h={6}
                      w={"90px"}
                    >
                      {item.Genre}
                    </Button>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Stack>
                    <Text>{item.Duration}</Text>
                    <Text>{item.Views}</Text>
                    <Heading>{item.Title}</Heading>
                  </Stack>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem key={`${item.Movie_ID}_${index}`}>
              <Card
                h={"560px"}
                w={"400px"}
                bgGradient="linear(to top, #000000 -2.92%, rgba(0, 0, 0, 0) 370%)"
                color={"white"}
              >
                <CardBody>
                  <Stack mt="1" spacing="3">
                    <Button
                      variant="solid"
                      colorScheme="brand"
                      color={"black"}
                      h={6}
                      w={"90px"}
                    >
                      {item.Genre}
                    </Button>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Stack>
                    <Text>{item.Duration}</Text>
                    <Text>{item.Views}</Text>
                    <Heading>{item.Title}</Heading>
                  </Stack>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem>
              <Card
                h={"560px"}
                w={"400px"}
                bgGradient="linear(to top, #000000 -2.92%, rgba(0, 0, 0, 0) 370%)"
                color={"white"}
              >
                <CardBody>
                  <Stack mt="1" spacing="3">
                    <Button
                      variant="solid"
                      colorScheme="brand"
                      color={"black"}
                      h={6}
                      w={"90px"}
                    >
                      {item.Genre}
                    </Button>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Stack>
                    <Text>{item.Duration}</Text>
                    <Text>{item.Views}</Text>
                    <Heading>{item.Title}</Heading>
                  </Stack>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem>
              <Card
                h={"560px"}
                w={"400px"}
                bgGradient="linear(to top, #000000 -2.92%, rgba(0, 0, 0, 0) 370%)"
                color={"white"}
              >
                <CardBody>
                  <Stack mt="1" spacing="3">
                    <Button
                      variant="solid"
                      colorScheme="brand"
                      color={"black"}
                      h={6}
                      w={"90px"}
                    >
                      {item.Genre}
                    </Button>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Stack>
                    <Text>{item.Duration}</Text>
                    <Text>{item.Views}</Text>
                    <Heading>{item.Title}</Heading>
                  </Stack>
                </CardFooter>
              </Card>
            </GridItem>
          </Grid>
        </Container>
      ))}
    </>
  );
}

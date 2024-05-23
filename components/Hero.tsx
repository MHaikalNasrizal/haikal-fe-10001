import Head from 'next/head';
import {
  Box,
  Container,
  Text,
  Stack,
  createIcon,
} from '@chakra-ui/react';

export default function Hero() {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Text color={'White'}>
            Monetize your content by charging your most loyal readers and reward
            them loyalty points. Give back to your loyal readers by granting
            them access to your pre-releases and sneak-peaks.
          </Text>
        </Stack>
      </Container>
    </>
  );
}
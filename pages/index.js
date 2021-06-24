import Head from 'next/head';
import { Flex, Button, Stack } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import Logo from '@/icons/Logo';
import { Github, Google } from '@/icons/Icons';

export default function Home() {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
      maxW="400px"
      margin="0 auto"
    >
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (document.cookie && document.cookie.includes('saas-feedback-auth')) {
                window.location.href = "/dashboard"
              }
            `
          }}
        />
        <title>Fast Feedback</title>
      </Head>
      <Logo />
      {auth.user ? (
        <Button as="a" size="sm" fontWeight="medium" href="/dashboard">
          View Dashboard
        </Button>
      ) : (
        <Stack>
          <Button
            onClick={() => auth.signinWithGithub()}
            backgroundColor="gray.900"
            color="white"
            fontWeight="medium"
            leftIcon={<Github fill="white" />}
            mt={4}
            size="lg"
            _hover={{ bg: 'gray.700' }}
            _active={{
              bg: 'gray.800',
              transform: 'scale(0.95)'
            }}
          >
            Sign In with GitHub
          </Button>
          <Button
            onClick={() => auth.signinWithGoogle()}
            backgroundColor="white"
              color="gray.900"
              variant="outline"
            fontWeight="medium"
            leftIcon={<Google />}
            mt={4}
            size="lg"
            _hover={{ bg: 'gray.100' }}
            _active={{
              bg: 'gray.100',
              transform: 'scale(0.95)'
            }}
          >
            Sign In with Google
          </Button>
        </Stack>
      )}
    </Flex>
  );
}

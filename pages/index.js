import Head from 'next/head';
import { Flex, Button } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import Logo from '@/icons/Logo';

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
        <Button
          mt={4}
          size="sm"
          fontWeight="medium"
          onClick={() => auth.signinWithGithub()}
        >
          Sign In
        </Button>
      )}
    </Flex>
  );
}

import Head from 'next/head'
import { Heading, Text, Button, Code } from '@chakra-ui/react';

import { useAuth } from '../lib/auth';


export default function Home() {

  const auth = useAuth();

  return (
    <div>
      <Head>
        <title>SaaS Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading>SaaS Feedback</Heading>
        <Text>
          Current User: <Code>{auth.user ? auth.user.email : 'None'}</Code>
        </Text>

        {auth.user ? (
          <Button onClick={() => auth.signout()}>Sign Out</Button>
        ) : (
          <Button onClick={() => auth.signinWithGithub()}>Sign In</Button>
        )}
      </main>
    </div>
  );
}

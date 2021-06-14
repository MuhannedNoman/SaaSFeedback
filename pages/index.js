import { Flex, Button } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import Logo from '@/icons/Logo';
import EmptyPlan from '@/components/EmptyPlan';

export default function Home() {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
      >
      <Logo />
      {auth.user ? (
          <EmptyPlan />
          // <Button onClick={() => auth.signout()}>Sign Out</Button>
        ) : (
          <Button mt={4} size="sm" onClick={() => auth.signinWithGithub()}>Sign In</Button>
        )}
      </Flex>
  );
}

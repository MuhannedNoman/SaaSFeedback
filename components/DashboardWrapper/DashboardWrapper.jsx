import React from 'react';
import NextLink from 'next/link';
import { Box, Button, Flex, Link, Avatar } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import Logo from '@/icons/Logo';
import { BASE_ROUTE, DASHBOARD_ROUTE, FEEDBACK_ROUTE } from '../../routes';

const DashboardWrapper = ({ children }) => {
  const { user, signout } = useAuth();

  return (
    <Box backgroundColor="gray.100" h="100vh">
      <Flex backgroundColor="white" mb={16} w="full">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          pt={4}
          pb={4}
          maxW="1250px"
          margin="0 auto"
          w="full"
          px={8}
        >
          <Flex>
            <NextLink href={BASE_ROUTE} passHref>
              <Logo boxSize="24px" mr={8} />
            </NextLink>
            <NextLink href={DASHBOARD_ROUTE} passHref>
              <Link mr={4}>Sites</Link>
            </NextLink>
            <NextLink href={FEEDBACK_ROUTE} passHref>
              <Link>Feedback</Link>
            </NextLink>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            {user && (
              <Button variant="ghost" mr={2} onClick={() => signout()}>
                Log Out
              </Button>
            )}
            <Avatar size="sm" src={user?.photoUrl} />
          </Flex>
        </Flex>
      </Flex>
      <Flex margin="0 auto" direction="column" maxW="1250px" px={8}>
        {children}
      </Flex>
    </Box>
  );
};

export default DashboardWrapper;

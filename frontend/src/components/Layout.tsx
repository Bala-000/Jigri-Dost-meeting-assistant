import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Link,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box minH="100vh" bg={useColorModeValue('white', 'gray.800')}>
      <Box bg="brand.600" px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Heading size="md" color="white">
            Jigri Dost Meeting Assistant
          </Heading>
          <Stack direction="row" spacing={4}>
            <Link
              as={RouterLink}
              to="/"
              color="white"
              _hover={{ textDecoration: 'none', color: 'brand.200' }}
            >
              Home
            </Link>
            <Link
              as={RouterLink}
              to="/meeting"
              color="white"
              _hover={{ textDecoration: 'none', color: 'brand.200' }}
            >
              New Meeting
            </Link>
            <Link
              as={RouterLink}
              to="/archive"
              color="white"
              _hover={{ textDecoration: 'none', color: 'brand.200' }}
            >
              Archive
            </Link>
          </Stack>
        </Flex>
      </Box>
      <Box p={4}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout; 
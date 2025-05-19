import React from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Layout>
      <Container maxW="container.xl" py={10}>
        <Stack spacing={8}>
          <Box textAlign="center">
            <Heading
              as="h1"
              size="2xl"
              bgGradient="linear(to-r, brand.400, brand.600)"
              bgClip="text"
              mb={4}
            >
              Smart Meeting Assistant
            </Heading>
            <Text fontSize="xl" color="gray.600">
              AI-powered meeting notes, transcription, and task management
            </Text>
          </Box>

          <Box
            p={8}
            bg={bgColor}
            borderRadius="lg"
            boxShadow="lg"
            border="1px"
            borderColor={borderColor}
          >
            <Stack spacing={6}>
              <Heading size="md">Start a New Meeting</Heading>
              <Text>
                Begin a new meeting with real-time transcription, AI-powered note-taking,
                and automated task detection.
              </Text>
              <Button
                colorScheme="purple"
                size="lg"
                onClick={() => navigate('/meeting')}
              >
                Start Meeting
              </Button>
            </Stack>
          </Box>

          <Box
            p={8}
            bg={bgColor}
            borderRadius="lg"
            boxShadow="lg"
            border="1px"
            borderColor={borderColor}
          >
            <Stack spacing={6}>
              <Heading size="md">View Past Meetings</Heading>
              <Text>
                Access your meeting history, including transcripts, notes, and action items.
              </Text>
              <Button
                colorScheme="purple"
                variant="outline"
                size="lg"
                onClick={() => navigate('/archive')}
              >
                View Archive
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Layout>
  );
};

export default Home; 
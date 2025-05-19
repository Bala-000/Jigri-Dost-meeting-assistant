import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import Layout from '../components/Layout';

// Mock data for demonstration
const mockMeetings = [
  {
    id: 1,
    title: 'Project Kickoff',
    date: '2024-02-20',
    duration: '1h 30m',
    participants: 5,
  },
  {
    id: 2,
    title: 'Sprint Planning',
    date: '2024-02-19',
    duration: '45m',
    participants: 8,
  },
  {
    id: 3,
    title: 'Team Sync',
    date: '2024-02-18',
    duration: '30m',
    participants: 4,
  },
];

const Archive: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const filteredMeetings = mockMeetings.filter((meeting) =>
    meeting.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <Container maxW="container.xl" py={10}>
        <Stack spacing={8}>
          <Heading size="lg" color="brand.600">
            Meeting Archive
          </Heading>

          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              placeholder="Search meetings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              bg={bgColor}
              borderColor={borderColor}
            />
          </InputGroup>

          <Box
            overflowX="auto"
            bg={bgColor}
            borderRadius="lg"
            boxShadow="md"
            border="1px"
            borderColor={borderColor}
          >
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Title</Th>
                  <Th>Date</Th>
                  <Th>Duration</Th>
                  <Th>Participants</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredMeetings.map((meeting) => (
                  <Tr key={meeting.id}>
                    <Td>{meeting.title}</Td>
                    <Td>{meeting.date}</Td>
                    <Td>{meeting.duration}</Td>
                    <Td>{meeting.participants}</Td>
                    <Td>
                      <Button
                        size="sm"
                        colorScheme="purple"
                        variant="outline"
                        onClick={() => {
                          // Handle view meeting details
                        }}
                      >
                        View Details
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Stack>
      </Container>
    </Layout>
  );
};

export default Archive; 
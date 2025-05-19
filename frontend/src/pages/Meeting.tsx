import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useToast,
  VStack,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { FaMicrophone, FaStop, FaSave } from 'react-icons/fa';
import Layout from '../components/Layout';
import { io, Socket } from 'socket.io-client';

const Meeting: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState<string[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);
  const toast = useToast();

  useEffect(() => {
    // Initialize socket connection
    const newSocket = io('http://localhost:5000');
    setSocket(newSocket);

    // Cleanup on unmount
    return () => {
      newSocket.close();
    };
  }, []);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      const audioChunks: Blob[] = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        // Send audio data to server for processing
        socket?.emit('transcription-data', {
          meetingId: 'current-meeting',
          audio: audioBlob,
        });
      };

      mediaRecorder.start();
      setIsRecording(true);

      // Listen for transcription updates
      socket?.on('transcription-update', (text: string) => {
        setTranscript((prev) => [...prev, text]);
      });

    } catch (error) {
      toast({
        title: 'Error',
        description: 'Could not access microphone',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const stopRecording = () => {
    setIsRecording(false);
    // Additional cleanup logic here
  };

  const saveMeeting = () => {
    // Save meeting data to backend
    toast({
      title: 'Success',
      description: 'Meeting saved successfully',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Layout>
      <Container maxW="container.xl" py={10}>
        <VStack spacing={8} align="stretch">
          <Heading size="lg" color="brand.600">
            Current Meeting
          </Heading>

          <Box
            p={6}
            bg="white"
            borderRadius="lg"
            boxShadow="md"
            border="1px"
            borderColor="gray.200"
          >
            <Stack spacing={4}>
              <HStack justify="space-between">
                <Text fontSize="lg" fontWeight="medium">
                  Live Transcription
                </Text>
                <HStack>
                  <IconButton
                    aria-label={isRecording ? 'Stop Recording' : 'Start Recording'}
                    icon={isRecording ? <FaStop /> : <FaMicrophone />}
                    colorScheme={isRecording ? 'red' : 'purple'}
                    onClick={isRecording ? stopRecording : startRecording}
                  />
                  <IconButton
                    aria-label="Save Meeting"
                    icon={<FaSave />}
                    colorScheme="purple"
                    onClick={saveMeeting}
                  />
                </HStack>
              </HStack>

              <Box
                h="400px"
                overflowY="auto"
                p={4}
                bg="gray.50"
                borderRadius="md"
              >
                {transcript.map((text, index) => (
                  <Text key={index} mb={2}>
                    {text}
                  </Text>
                ))}
              </Box>
            </Stack>
          </Box>

          <Box
            p={6}
            bg="white"
            borderRadius="lg"
            boxShadow="md"
            border="1px"
            borderColor="gray.200"
          >
            <Stack spacing={4}>
              <Heading size="md">Action Items</Heading>
              <Text color="gray.600">
                Action items will be automatically detected and listed here...
              </Text>
            </Stack>
          </Box>
        </VStack>
      </Container>
    </Layout>
  );
};

export default Meeting; 
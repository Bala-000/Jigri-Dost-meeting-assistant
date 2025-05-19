import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Custom theme with purple and white color scheme
const theme = extendTheme({
  colors: {
    brand: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6',
      600: '#6B46C1', // Primary purple
      700: '#5b21b6',
      800: '#4c1d95',
      900: '#2e1065',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.800',
      },
    },
  },
});

// Placeholder components - we'll create these next
const Home = () => <div>Home Page</div>;
const Meeting = () => <div>Meeting Page</div>;
const Archive = () => <div>Archive Page</div>;

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meeting" element={<Meeting />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App; 
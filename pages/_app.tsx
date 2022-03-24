import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.StrictMode>
      <ChakraProvider>
        <Component { ...pageProps } />
      </ChakraProvider>
    </React.StrictMode>
  );
};

export default App;
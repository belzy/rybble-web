import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';

const theme = extendTheme({
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif'
  },
  colors: {
    brand: {
      500: '#7E57C2',
      600: '#673AB7',
      800: '#44337A'
    }
  }
})

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <React.StrictMode>
      <ChakraProvider theme={ theme }>
        <Component { ...pageProps } />
      </ChakraProvider>
    </React.StrictMode>
  );
};

export default App;
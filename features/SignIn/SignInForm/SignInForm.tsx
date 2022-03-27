import React from 'react';
import {
  Heading,
  VStack,
  Text,
} from '@chakra-ui/react';
import Form from './Form';

const SignInForm = (): React.ReactElement => {

  return (
    <VStack 
      align='center' 
      justify='center' 
      flex='1'
      width='90%'
      maxWidth='384px'
      m='auto'
    >
      <Text 
        fontSize='3xl' 
        as='h2'
        mb='8px'
      >Welcome Back</Text>

      <Text textAlign='center'>
        To keep connected with us please sign in<br /> with your personal info
      </Text>

      <Form />
    </VStack>
  );
};

export default SignInForm;
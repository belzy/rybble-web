import React from 'react';
import {
  Heading,
  VStack,
  Text,
} from '@chakra-ui/react';
import Form from './Form';

const RegisterForm = () => {

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
      >Create Account</Text>

      <Text textAlign='center'>
        To keep connected with us please sign<br /> in with your personal info
      </Text>

      <Form />
    </VStack>
  );
};

export default RegisterForm;
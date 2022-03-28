import React from 'react';
import {
  Heading,
  VStack,
  Text,
  Button,
} from '@chakra-ui/react';
import Form from './Form';
import AuthForm from '../../../components/container/AuthForm';
import NameInput from '../../../components/presentation/Inputs/NameInput';
import EmailInput from '../../../components/presentation/Inputs/EmailInput';
import PasswordInput from '../../../components/presentation/Inputs/PasswordInput';

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
        Enter your personal details and start planning<br /> your day
      </Text>

      <AuthForm>
        <NameInput />
        <EmailInput />
        <PasswordInput />

        <Button 
          bgColor='brand.600' 
          color='white' 
          _hover={{ backgroundColor: 'brand.500'}}
          fontSize='sm' 
          isFullWidth={ true }
          size='lg'
        >SIGN UP</Button>

        <Text fontWeight='500' color='GrayText'>OR</Text>

      </AuthForm>

      {/* <Form /> */}
    </VStack>
  );
};

export default RegisterForm;
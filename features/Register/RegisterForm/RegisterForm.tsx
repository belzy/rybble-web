import React from 'react';
import {
  Heading,
  VStack,
  Text,
  Button,
} from '@chakra-ui/react';
import {
  AuthForm,
  NameInput,
  EmailInput,
  PasswordInput,
  SocialButtonGroup,
} from '../../../components';

const Form = (): React.ReactElement => {

  return (
    <AuthForm>
      <NameInput />
      <EmailInput />
      <PasswordInput />

      <Button 
        bgColor='brand.600' 
        color='white' 
        _hover={{ backgroundColor: 'brand.500' }}
        fontSize='sm' 
        isFullWidth={ true }
        size='lg'
      >SIGN UP</Button>

      <Text fontWeight='500' color='GrayText'>OR</Text>

      <SocialButtonGroup
        buttonIcons={ ['facebook', 'google', 'twitter'] }
      />

    </AuthForm>);
};

const RegisterForm = (): React.ReactElement => {

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

      <Form />
    </VStack>
  );
};

export default RegisterForm;
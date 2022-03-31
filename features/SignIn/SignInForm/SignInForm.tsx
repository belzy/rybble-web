import React from 'react';
import {
  Heading,
  VStack,
  Text,
} from '@chakra-ui/react';
import {
  AuthForm,
  NameInput,
  EmailInput,
  PasswordInput,
  SocialButtonGroup,
  Link,
} from '../../../components';

const ForgotPasswordLink = (): React.ReactElement => {

  return (
    <Link 
      href='/forgot-password'
      color='brand.600'
      _hover={{ color: 'brand.500' }}
      fontSize='sm'
      fontWeight='500'
    >FORGOT PASSWORD</Link>
  );
};

const Form = (): React.ReactElement => {

  return (
    <AuthForm>

      <EmailInput />
      <PasswordInput />

      <ForgotPasswordLink />

      <Text fontWeight='500' color='GrayText'>OR</Text>

      <SocialButtonGroup 
        buttonIcons={ ['facebook', 'google', 'twitter'] }
      />

    </AuthForm>
  );
};

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
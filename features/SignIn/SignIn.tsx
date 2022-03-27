import React from 'react';
import {
  Text
} from '@chakra-ui/react';
import { AuthPage } from '../../components';
import { Link } from '../../components';
import { SignInForm } from './SignInForm';

const SignIn = (): React.ReactElement => {

  return (
    <AuthPage>

      <Text 
        fontSize='sm' 
        color='GrayText'
        ml='auto'
      >Don't have an account yet?

        <Link 
          href='/register' 
          ml='16px' 
          color='brand.600'
          _hover={{ color: 'brand.500' }}
          fontWeight='500'
        >SIGN UP</Link>

      </Text>

      <SignInForm />

    </AuthPage>
  );
};

export default SignIn;
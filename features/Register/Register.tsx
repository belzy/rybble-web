import React from 'react';
import {
  Text
} from '@chakra-ui/react';
import { AuthPage } from '../../components';
import { Link } from '../../components';
import { RegisterForm } from './RegisterForm';

const Register = (): React.ReactElement => {

  return (
    <AuthPage>

      <Text 
        fontSize='sm' 
        color='GrayText'
        ml='auto'
      >Already have an account?

        <Link 
          href='/sign-in'
          ml='16px' 
          color='brand.600'
          _hover={{ color: 'brand.500' }}
          fontWeight='500'
        >SIGN IN</Link>

      </Text>

      <RegisterForm />

    </AuthPage>
  );
};
export default Register;
import React from 'react';
import {
  VStack,
} from '@chakra-ui/react';
import { TAuthFormProps } from './AuthForm.types';

/**
 * Used to wrap auth form inputs.
 * @param { React.ReactNode } children 
 * @returns { React.ReactElement }
 * @example <AuthForm> //...form elements </AuthForm>
 */
const AuthForm = ({ children }
  : TAuthFormProps)
  : React.ReactElement<TAuthFormProps> => {

  return (
    <form
      data-testid='auth-form'
      style={{ marginTop: '64px', width: '100%' }}
    >
      <VStack spacing={ 8 }>

        { children }

      </VStack>
    </form>
  );
};

export default AuthForm;
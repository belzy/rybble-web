import React from 'react';
import {
  FormControl,
  InputGroup,
  InputLeftElement,
  Input
} from '@chakra-ui/react';
import { LockIcon } from '@chakra-ui/icons';

const PasswordInput = (): React.ReactElement => {

  return (
    <FormControl>

    <InputGroup>

      <InputLeftElement 
        pointerEvents='none'
        children={ <LockIcon color='gray.300' fontSize='20px' /> }
      />

      <Input 
        variant='flushed'
        id='register-password' 
        type='password' 
        name='register-password'
        placeholder='Password' 
        focusBorderColor='brand.600'
      />
    </InputGroup>

    </FormControl>);
};

export default PasswordInput;
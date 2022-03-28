import React from 'react';
import {
  FormControl,
  InputGroup,
  InputLeftElement,
  Input
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

/**
 * 
 * @returns { React.ReactElement } React Element
 */
const EmailInput = (): React.ReactElement => {

  return (
    <FormControl>

    <InputGroup>

      <InputLeftElement 
        pointerEvents='none'
        children={ <EmailIcon color='gray.300' fontSize='20px' /> }
      />

      <Input 
        variant='flushed'
        id='register-email' 
        type='email' 
        name='register-email'
        placeholder='Email' 
        focusBorderColor='brand.600'
      />
    </InputGroup>

    </FormControl>);
};

export default EmailInput;
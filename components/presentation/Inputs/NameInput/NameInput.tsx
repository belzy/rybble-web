import React from 'react';
import {
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react';
import { FaUserAlt } from 'react-icons/fa';

/**
 * 
 * @returns { React.ReactElement } React Element
 */
const NameInput = (): React.ReactElement => {

  return (
  <FormControl>

    <InputGroup>

      <InputLeftElement 
        pointerEvents='none'
        children={ <FaUserAlt color='#cbd5e0' fontSize='20px' /> }
      />

      <Input 
        variant='flushed'
        id='register-name'
        type='text'
        name='register-name'
        placeholder='Name or nickname'
        focusBorderColor='brand.600'
      />
    </InputGroup>

  </FormControl>);
};

export default NameInput;
import React from 'react';
import {
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  Button,
  ButtonGroup,
  IconButton,
} from '@chakra-ui/react'
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { FaUserAlt, FaTwitter, FaFacebookF, } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from '../../../components'

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

const SocialButtons = (): React.ReactElement => {

  return (
    <ButtonGroup spacing={ 4 }>

      <IconButton 
        size='lg'
        aria-label='Sign up with Facebook'
        icon={ <FaFacebookF color='#3B5998' /> }
      />

      <IconButton 
        size='lg'
        aria-label='Sign up with Google' 
        icon={ <FcGoogle /> }
      />

      <IconButton 
        size='lg'
        aria-label='Sign up with Twitter' 
        icon={ <FaTwitter color='#55ACEE' /> }
      />

    </ButtonGroup>);
};

const Form = (): React.ReactElement => {

  return (
    <form style={{ marginTop: '64px', width: '100%' }}>

      <VStack spacing={ 8 }>
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

       <SocialButtons /> 

      </VStack>


    </form>
  );
};

export default Form;
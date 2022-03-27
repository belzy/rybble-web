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
import { EmailIcon, LockIcon, CloseIcon} from '@chakra-ui/icons';
import { AuthPage } from '../../components';
import { Link } from '../../components';

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
        id='email' 
        type='email' 
        placeholder='Email' 
        focusBorderColor='brand.600'
      />
    </InputGroup>

    </FormControl>);
};

const ForgotPasswordForm = (): React.ReactElement => {

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
      >Forgot Password</Text>

      <Text textAlign='center'>
        Please enter your registered email<br /> to reset your password
      </Text>

      <form style={{ marginTop: '64px', width: '100%' }}>

        <VStack spacing={8}>
          <EmailInput />

          <Button
            bgColor='brand.600'
            color='white'
            _hover={{ backgroundColor: 'brand.500' }}
            fontSize='sm'
            isFullWidth={true}
            size='lg'
          >FORGOT PASSWORD</Button>

        </VStack>

      </form>
    </VStack>
  );
};

const ForgotPassword = (): React.ReactElement => {

  return (
    <AuthPage>

      <Link
        href='/sign-in'
        color='brand.600'
        _hover={{ color: 'brand.500' }}
        fontWeight='500'
        ml='auto'
      >
        <IconButton 
          variant='unstyled' 
          aria-label='Close' 
          icon={ <CloseIcon /> } 
          color='gray' 
        />
      </Link>

      <ForgotPasswordForm />

    </AuthPage>
  );
};

export default ForgotPassword;
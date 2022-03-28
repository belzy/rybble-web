import React from 'react';
import {
  IconButton,
} from '@chakra-ui/react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

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
}
k
export type TSocialButtonProps = {
  icon: 'twitter' | 'facebook' | 'google'
};

const SocialButton = ({ icon }: TSocialButtonProps): React.ReactElement<TSocialButtonProps> => {


  return (
  );
};
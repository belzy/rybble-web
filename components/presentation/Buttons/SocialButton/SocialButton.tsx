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

export type TSocialButtonProps = {
  icon: 'twitter' | 'facebook' | 'google'
};

const SocialButton = ({ icon }: TSocialButtonProps): React.ReactElement<TSocialButtonProps> => {

  let Icon: any = <></>;
  let label: string = '';

  switch (icon) {

    case 'facebook':
      Icon = <FaFacebookF color='#3B5998' />;
      label = 'Sign up with Facebook';
      break;

    case 'twitter':
      Icon = <FaTwitter color='#55ACEE' />;
      label = 'Sign up with Twitter';
      break;

    case 'google':
      Icon = <FcGoogle />;
      label = 'Sign up with Google';
    default:

  };

  return (

      <IconButton 
        size='lg'
        aria-label={ label }
        icon={ <Icon />  }
      />
    
  );
};
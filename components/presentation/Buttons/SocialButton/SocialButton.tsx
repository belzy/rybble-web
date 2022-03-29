import React from 'react';
import {
  IconButton,
} from '@chakra-ui/react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { TSocialButtonProps } from './SocialButton.types';

/**
 * * A button for allowing users to sign in/register with their social profiles
 * @param { TSocialButtonProps } icon 
 * @returns { React.ReactElement } React Element
 */
const SocialButton = ({ icon }: TSocialButtonProps): React.ReactElement<TSocialButtonProps> => {

  let Icon: any = '';
  let label: string = 'Sign up with ';
  let testId: string = 'social-button-facebook-icon-';

  if (icon === 'facebook') {
    Icon = <FaFacebookF color='#3B5998' />;
    label += 'Facebook';
    testId += 'facebook';
  }

  else if (icon === 'twitter') {
    Icon = <FaTwitter color='#55ACEE' />;
    label += 'Twitter';
  }

  else if (icon === 'google') {
    Icon = <FcGoogle />;
    label += 'Google';
  }

  // <IconButton 
  //   size='lg'
  //   aria-label={ label }
  //   icon={ <Icon data-testid={ testId } /> }
  // />
  return (

    <>Hello</>
    
  );
};

export default SocialButton;
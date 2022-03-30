import React from 'react';
import {
  IconButton,
} from '@chakra-ui/react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { TSocialButtonProps } from './SocialButton.types';

/**
 * Used to create a button for users to sign in or register with their 
 * social profiles.
 * 
 * @param { TSocialButtonProps } props
 * @param { 'facebook' | 'twitter' | 'google' } props.icon
 * @returns { React.ReactElement } React Element
 */
const SocialButton = ({ icon }: TSocialButtonProps): React.ReactElement<TSocialButtonProps> => {

  let Icon: any = <FcGoogle />;
  let label: string = 'Sign up with ';
  let testId: string = 'social-button-icon-';

  if (icon === 'facebook') {
    label += 'facebook';
    testId += 'facebook';
    Icon = <FaFacebookF color='#3B5998' data-testid={ testId } />;
  }

  else if (icon === 'twitter') {
    label += 'twitter';
    testId +='twitter';
    Icon = <FaTwitter data-testid={ testId } color='#55ACEE' />;
  }

  else if (icon === 'google') {
    label += 'google';
    testId += 'google';
    Icon = <FcGoogle data-testid={ testId } />;
  }

  return (
    <IconButton 
      size='lg'
      aria-label={ label }
      icon={ Icon }
    /> );
};

export default SocialButton;
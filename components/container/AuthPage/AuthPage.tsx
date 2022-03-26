import React from 'react';
import { 
  Flex, 
  Image, 
  Heading,
  Show,
  Hide,
  Box,
} from '@chakra-ui/react';
import Carousel from './Carousel/Carousel';
import { Link } from '../../../components';
import { 
  TInnerContainerProps,
  TInnerContainerRightProps,
  TAuthPageProps,
} from'./AuthPage.types';

export const InnerContainer = ({ style = {}, bgColor = 'transparent', children }
  : TInnerContainerProps)
  : React.ReactElement<TInnerContainerProps> => {

  return (
    <Flex
      { ...style }
      flexDir='column'
      flex='1'
      p={{ base: '48px  20px', sm: '48px', md: '64px 80px' }}
      bgColor={bgColor}
    >{ children }</Flex>
  );
};

export const PrivacyTerms = (): React.ReactElement => {

  return (
    <Flex justifyContent='center' mt='auto'>
      <Link 
        mr='18px' 
        color='brand.600'
        _hover={{ color: 'brand.500' }}
        href='/privacy-policy'
        fontSize='sm'
        fontWeight='500'
      >
        PRIVACY POLICY
      </Link>

      <Link 
        ml='18px' 
        color='brand.600' 
        _hover={{ color: 'brand.500' }}
        fontSize='sm'
        fontWeight='500'
      >
        TERMS OF SERVICE
      </Link>
    </Flex>);
};

export const InnerContainerTop = (): React.ReactElement => {

  return (
    <Box maxWidth='560px'>
      <Image mb='24px' boxSize='32px' src='/assets/img/rybble-logo32x32.svg' />
      <Carousel />
    </Box>);
};

export const InnerContainerLeft = (): React.ReactElement => {

  return (
    <InnerContainer bgColor='blackAlpha.200' style={{ maxWidth: '720px' }}>
      <InnerContainerTop />
      <Image src='/assets/img/auth-page-hero560x400.png' mt='80px' />

      <PrivacyTerms />
    </InnerContainer>
  );
};

export const InnerContainerRight = ({ children }
  : TInnerContainerRightProps)
  : React.ReactElement<TInnerContainerRightProps> => {

    return (
      <InnerContainer bgColor='white' style={{ width: '100%' }}>
        <Show below='lg'>
          <InnerContainerTop />
        </Show>

        { children }

        <Show below='lg'><PrivacyTerms /></Show>
      </InnerContainer>
  );
};

/**
 * A container for auth forms such as login and register.
 * @returns { React.ReactElement } React Element
 * @example <AuthPage><RegisterForm /></AuthPage>
 */
const AuthPage = ({ children }
  : TAuthPageProps)
  : React.ReactElement<TAuthPageProps> => {

  return (
    <Flex h='100vh' w='100vw'>

      <Hide below='lg'><InnerContainerLeft /></Hide>

      <InnerContainerRight>{ children }</InnerContainerRight>

    </Flex>
  );

};

export default AuthPage;
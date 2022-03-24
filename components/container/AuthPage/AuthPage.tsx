import React from 'react';
import { 
  Flex, 
  Image, 
  Link,
  Heading,
} from '@chakra-ui/react';
import Carousel from './Carousel/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

type TInnerContainerProps = {
  style?: Object
  bgColor?: string
  children?: React.ReactChild | Array<React.ReactChild>
};

export const InnerContainer = ({ style = {}, bgColor = 'transparent', children }: TInnerContainerProps): React.ReactElement => {

  return (
    <Flex
      { ...style }
      flexDir='column'
      flex='1'
      p='64px 80px'
      bgColor={ bgColor }
    >{ children }</Flex>
  );
};

const AuthPage = () => {

  return (
    <Flex h='100vh' w='100vw'>

      <InnerContainer bgColor='blackAlpha.200' style={{ maxWidth: '720px' }}>
        <Image mb='24px' boxSize='32px' src='/assets/img/rybble-logo32x32.svg' />
        <Carousel />
        <Image src='/assets/img/auth-page-hero560x400.png' mt='80px' />

        <Flex justifyContent='center' mt='auto'>
          <Link mr='18px'><Heading textDecor='none' size='xs' color='#673AB7'>PRIVACY POLICY</Heading></Link>
          <Link ml='18px'><Heading textDecor='none' size='xs' color='#673AB7'>TERMS OF SERVICE</Heading></Link>
        </Flex>
      </InnerContainer>

      <InnerContainer bgColor='white' style={{ width: '100%' }}></InnerContainer>

    </Flex>
  );

};

export default AuthPage;
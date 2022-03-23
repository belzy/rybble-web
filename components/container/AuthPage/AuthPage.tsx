import React from 'react';
import { Flex } from '@chakra-ui/react';
import Carousel from './Carousel/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

type TInnerContainerProps = {
  bgColor?: string
  children: React.ReactChild
};

export const InnerContainer = ({ bgColor = 'transparent', children }: TInnerContainerProps): React.ReactElement => {

  return (
    <Flex
      flexDir='column'
      flex='1'
      p='64px 80px'
      bgColor={ bgColor }
    ></Flex>
  );
};

const AuthPage = () => {

  return (
    <Flex h='100vh' w='100vw'>

      <Flex 
        flex='1' 
        bgColor='blackAlpha.200' 
        flexDir='column'
        p='64px 80px'
      >
        <Carousel />
      </Flex>

      <Flex flex='1' flexDir='column'></Flex>

    </Flex>
  );

};

export default AuthPage;
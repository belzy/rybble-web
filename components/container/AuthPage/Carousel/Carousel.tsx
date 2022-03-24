import React from 'react';
import { Text, } from '@chakra-ui/react';
import { 
  Carousel as BSCarousel,
} from 'react-bootstrap';
import styles from './Carousel.module.css';

const Carousel = () => {

  return (
    <BSCarousel className={ styles.carousel }>
      <BSCarousel.Item>
        <Text fontSize='3xl' as='h3' mb='16px'>Get More Done</Text>
        <Text fontSize='md'>
          Stay organised, get notified when work happens<br /> and get results.
        </Text>

      </BSCarousel.Item>

      <BSCarousel.Item>
        <Text  fontSize='3xl' as='h3' mb='16px'>Stay Connected</Text>
        <Text fontSize='md'>
          Create tasks, lists and projects and assign<br /> them to your colleagues.
        </Text>

      </BSCarousel.Item>

      <BSCarousel.Item>
        <Text fontSize='3xl' as='h3' mb='16px'>Live Smarter</Text>
        <Text fontSize='md'>
          Each minute is a little thing, and yet,  to manage<br /> the minute 
          is the secret of success.
        </Text>

      </BSCarousel.Item>
    </BSCarousel>
  );
};

export default Carousel;
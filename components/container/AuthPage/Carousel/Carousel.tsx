import React from 'react';
import { Text, } from '@chakra-ui/react';
import { 
  Carousel as BSCarousel,
} from 'react-bootstrap';
import styles from './Carousel.module.css';
import { TCarouselItem } from './Carousel.types';

const Carousel = () => {

  const carouselData: TCarouselItem[] = [{
      title: 'Get More Done',
      subTitle: ['Stay organised, get notified when work happens', 'and get results']
    }, {
      title: 'Stay Connected',
      subTitle: ['Stay organised, get notified when work happens', 'and get results']
    }, {
      title: 'Live Smarter',
      subTitle: ['Each minute is a little thing, and yet,  to manage', 'is the secret of success.']
    }];

  return (
    <BSCarousel className={ styles.carousel }>

      { carouselData.map(( data: TCarouselItem, i: number ) => (

        <BSCarousel.Item key={ i }>

          <Text 
            fontSize='3xl' 
            as='h3' 
            mb='16px'
          >{ data.title }</Text>

          <Text fontSize='md'>
            { data.subTitle[0] } 
            <br /> 
            { data.subTitle[1] }
          </Text>

        </BSCarousel.Item>

      )) }

    </BSCarousel>
  );
};

export default Carousel;
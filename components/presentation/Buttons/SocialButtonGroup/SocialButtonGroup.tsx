import React from 'react';
import {
  ButtonGroup,
} from '@chakra-ui/react';
import SocialButton from '../SocialButton';

type TSocialButtonGroupProps = {
  buttonIcons: Array<string>
};

/**
 * Displays a group of social buttons.
 * 
 * @param { TSocialButtonGroupProps } props
 * @param { Array<string> } props.buttonIcons ('facebook' | 'twitter' | 'google)
 * @returns { React.ReactElement } React Element
 */
const SocialButtonGroup = ({ buttonIcons }
  : TSocialButtonGroupProps)
  : React.ReactElement<TSocialButtonGroupProps> => {

  return (
    <ButtonGroup spacing={ 4 }>

      { buttonIcons.length > 0 
        && buttonIcons.map((icon: string, i: number) => {


        return <SocialButton key={ i } icon={ icon } />

      }) }

    </ButtonGroup>
  );
};

export default SocialButtonGroup;
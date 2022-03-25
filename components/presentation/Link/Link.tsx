import React from 'react';
import { Link as CLink } from '@chakra-ui/react';
import { TLinkProps } from './Link.types';
import styles from './Link.module.css';

/**
 * This component extends the Chakra-UI Link component. 
 * Created to override the default css styles. 
 * 
 * Links are accessible elements used primarily for navigation.
 * 
 * It integrates well with other routing libraries like React Router, Reach Router and Next.js Link.
 * 
 * @returns { React.ReactElement } React Element
 * @example <Link as={ReactRouterLink} to="/home">Home</Link>
 * @see — Docs https://chakra-ui.com/link 
 */
const Link = (props: TLinkProps): React.ReactElement<TLinkProps> => {

  return (<CLink className={ styles.link }{ ...props }>{ props.children }</CLink>);
};

export default Link;
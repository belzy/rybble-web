import { render, screen} from '@testing-library/react';
import SocialButtonGroup from './SocialButtonGroup';
import  { TEST_STRINGS } from '../../../../constants/test.constants';
import '@testing-library/jest-dom';

const { SNAPSHOT_STRINGS } = TEST_STRINGS;

const buttonIcons = ['facebook', 'twitter', 'google'];

describe('components/SocialButtonGroup', (): void => {

  it('should render', (): void => {

    render(<SocialButtonGroup buttonIcons={ buttonIcons } />)

    screen.logTestingPlaygroundURL();
    screen.debug();

  });

  it('should have 3 children given an array with three elements', (): void => {

  });

});
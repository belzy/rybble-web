import { render, RenderResult, screen} from '@testing-library/react';
import SocialButton from './SocialButton';
import  { TEST_STRINGS } from '../../../../constants/test.constants';

const { SNAPSHOT_STRINGS } = TEST_STRINGS;

/**
 * TODO: Write tests
 * * Should render
 * * Should render facebook icon given facebook prop
 * * Should render the correct label given facebook prop.
 * * Should render twitter icon given twitter prop
 * * Should render the correct label given twitter prop.
 * * Should render google icon given google prop
 * * Should render the correct label given google prop.
 * * Should handle click event
 * * Snapshot test
 */

let label: string = 'Sign up with ';

describe('components/SocialButton', (): void => {

  it ('should render', (): void => {

    render(<SocialButton />);

    const socialButtonEl = screen.queryByRole('button');

    expect(typeof socialButtonEl).toBe(HTMLElement);
  });



});
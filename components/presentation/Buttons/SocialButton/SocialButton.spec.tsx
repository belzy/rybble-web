import { render, RenderResult, screen} from '@testing-library/react';
import SocialButton from './SocialButton';
import  { TEST_STRINGS } from '../../../../constants/test.constants';
import '@testing-library/jest-dom';

const { SNAPSHOT_STRINGS } = TEST_STRINGS;

/**
 * TODO: Write tests
 * * [x] Should render
 * * [x] Should render facebook icon given facebook prop
 * * [x] Should render the correct label given facebook prop.
 * * [x] Should render twitter icon given twitter prop
 * * [x] Should render the correct label given twitter prop.
 * * [x] Should render google icon given google prop
 * * [x] Should render the correct label given google prop.
 * * Should handle click event
 * * Snapshot test
 */

let label: string = 'Sign up with ';
describe('components/SocialButton', (): void => {
  
  it('should render', (): void => {

    render(<SocialButton icon='facebook' />);

    const socialButtonEl: HTMLElement = screen.getByRole('button');

    expect(socialButtonEl).toBeInTheDocument();
  });

  it('should render a Facebook icon given facebook as a prop', (): void => {

    render(<SocialButton icon='facebook' />);

    expect(screen.getByTestId('social-button-icon-facebook')).toBeInTheDocument();

  });

  it('should render the correct label given facebook as a prop', (): void => {

    render(<SocialButton icon='facebook' />);

    expect(screen.getByLabelText(/sign up with facebook/i)).toBeInTheDocument();

  });

  it('should render a Twitter icon given twitter as a prop', (): void => {

    render(<SocialButton icon='twitter' />);

    expect(screen.getByTestId('social-button-icon-twitter')).toBeInTheDocument();

  });

  it('should render the correct label given twitter as a prop', (): void => {

    render(<SocialButton icon='twitter' />);

    expect(screen.getByLabelText(/sign up with twitter/i)).toBeInTheDocument();

  });

  it('should render a Google icon given google as a prop', (): void => {

    render(<SocialButton icon='google' />);

    expect(screen.getByTestId('social-button-icon-google')).toBeInTheDocument();

  });

  it('should render the correct label given google as a prop', (): void => {

    render(<SocialButton icon='google' />);

    expect(screen.getByLabelText(/sign up with google/i)).toBeInTheDocument();

  });
});
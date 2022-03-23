import { render } from '@testing-library/react';
import SignIn from './SignIn';
import '@testing-library/jest-dom';

describe('features/SignIn', () => {

  it('should render', () => {

    const { container } = render(<SignIn />);

    expect(container).toMatchSnapshot();

  });

});
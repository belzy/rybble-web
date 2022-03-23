import { render } from '@testing-library/react';
import RegisterPage from '../register';
import '@testing-library/jest-dom';

describe('pages/register', () => {

  it('should render', () => {

    const { container } = render(<RegisterPage />);

    expect(container).toMatchSnapshot();

  });

});
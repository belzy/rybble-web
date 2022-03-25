import { render } from '@testing-library/react';
import RegisterPage from '../pages/register';
import '@testing-library/jest-dom';

describe('pages/register', () => {

  it('should render unchanged', () => {

    const { container } = render(<RegisterPage />);

    expect(container).toMatchSnapshot();

  });

});
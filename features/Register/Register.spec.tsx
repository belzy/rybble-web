import { render, screen } from '@testing-library/react';
import Register from '.';
import '@testing-library/jest-dom';

describe('features/SignIn', () => {

  it('should render a heading', () => {

    render(<Register />);

    const heading = screen.getByRole('heading', {
      name: /Sign In/i,
    });

    expect(heading).toBeInTheDocument()

  });

});
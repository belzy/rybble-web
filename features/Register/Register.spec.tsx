import { render, screen } from '@testing-library/react';
import Register from '.';
import '@testing-library/jest-dom';

describe('features/Register', () => {

  it('should render Register component unchanged', () => {

    const { container } = render(<Register />);

    expect(container).toMatchSnapshot();

  });

  it('should render a heading', () => {

    render(<Register />);

    const heading = screen.getByRole('heading', {
      name: /Sign In/i,
    });

    expect(heading).toBeInTheDocument();

  });

});
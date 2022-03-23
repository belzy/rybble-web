import { render, screen } from '@testing-library/react';
import Register from './Register';
import '@testing-library/jest-dom';

describe('features/Register', () => {

  it('should render', () => {

    const { container } = render(<Register />);

    expect(container).toMatchSnapshot();

  });

});
import { render, screen } from '@testing-library/react';
import Link from './Link';
import '@testing-library/jest-dom';

describe('components/Link', () => {

  it('should render', () => {

    const { container } = render(<Link />);

    expect(container).toMatchSnapshot();

  });

});
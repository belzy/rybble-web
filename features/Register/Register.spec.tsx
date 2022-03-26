import { render, screen } from '@testing-library/react';
import Register from './Register';
import '@testing-library/jest-dom';
import { TEST_STRINGS } from '../../constants/test.constants';

const { SNAPSHOT_STRINGS } = TEST_STRINGS;

describe('features/Register', () => {

  it(SNAPSHOT_STRINGS[0], () => {

    const { container } = render(<Register />);

    expect(container).toMatchSnapshot();

  });
  
});
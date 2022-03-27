import { render } from '@testing-library/react';
import RegisterPage from '../pages/register';
import '@testing-library/jest-dom';
import { TEST_STRINGS } from '../constants/test.constants';

const { SNAPSHOT_STRINGS } = TEST_STRINGS;

describe('pages/register', () => {

  it(SNAPSHOT_STRINGS[0], () => {

    const { container } = render(<RegisterPage />);

    expect(container).toMatchSnapshot();

  });

});
import { render } from '@testing-library/react';
import SignIn from './SignIn';
import '@testing-library/jest-dom';
import { TEST_STRINGS } from '../../constants/test.constants';

const { SNAPSHOT_STRINGS } = TEST_STRINGS;

describe('features/SignIn', () => {

  it(SNAPSHOT_STRINGS[0], () => {

    const { container } = render(<SignIn />);

    expect(container).toMatchSnapshot();

  });

});
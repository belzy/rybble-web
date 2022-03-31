import { render } from '@testing-library/react';
import SignInForm from './SignInForm';
import '@testing-library/jest-dom';
import { TEST_STRINGS } from '../../../constants/test.constants';

const { SNAPSHOT_STRINGS } = TEST_STRINGS;

/**
 * TODO: Tests
 * * Enable snapshot tests
 */

describe('features/SignIn', () => {

  it(SNAPSHOT_STRINGS[0], () => {

    const { container } = render(<SignInForm />);

    // expect(container).toMatchSnapshot();

  });

});
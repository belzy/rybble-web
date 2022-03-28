import RegisterForm from './RegisterForm';
import Form from './Form';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TEST_STRINGS } from '../../../constants/test.constants';

const { SNAPSHOT_STRINGS } = TEST_STRINGS;

describe('features/Register/RegisterForm', () => {

  it(SNAPSHOT_STRINGS[0], () => {

    const { container } = render(<RegisterForm />);

    expect(container).toMatchSnapshot();
  });

  it(SNAPSHOT_STRINGS[0], () => {

    const { container } = render(<Form />);

    expect(container).toMatchSnapshot();

  });

  /**
   * TODO: Write tests
   * TODO: The sign up button should be disabled initially.
   * TODO: The sign up button should be enabled when inputs are valid and complete.
   * TODO: Should handle error when user with that email already exists.
   * TODO: Should handle errors when form input values are not valid (name, email, password).
   * 
   */
});
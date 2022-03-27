import { render } from '@testing-library/react';
import RegisterForm from './RegisterForm';
import Form from './Form';
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

});
import AuthForm from './AuthForm';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { TEST_STRINGS } from '../../../constants/test.constants';

const { SNAPSHOT_STRINGS } = TEST_STRINGS;

describe('components/AuthForm', () => {

  it(SNAPSHOT_STRINGS[0], () => {

    const { container } = render(<AuthForm><p>Test</p></AuthForm>);

    expect(container).toMatchSnapshot();

  });

  it('should render a child', () => {

    render(
      <AuthForm>
        <p>Should Render</p>
      </AuthForm>
    );

    const formEl = screen.getByTestId('auth-form');

    expect(formEl.children.length).toEqual(1);

  });

});


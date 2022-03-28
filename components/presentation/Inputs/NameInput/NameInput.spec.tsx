import { render } from '@testing-library/react';
import NameInput from './NameInput';
import '@testing-library/jest-dom';

import { TEST_STRINGS } from '../../../../constants/test.constants';

const { SNAPSHOT_STRINGS } = TEST_STRINGS;

/**
 * TODO: Enable snapshot when component is complete
 * TODO: should update state when user enters a value
 * TODO: should update value when state is changed
 */

describe('components/NameInput', () => {

  it(SNAPSHOT_STRINGS[0], () => {

    const { container } = render(<NameInput />);

    expect(container).toMatchSnapshot();

  });
});
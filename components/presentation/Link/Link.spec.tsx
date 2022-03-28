import { render } from '@testing-library/react';
import Link from './Link';
import '@testing-library/jest-dom';

import { TEST_STRINGS } from '../../../constants/test.constants';

const { SNAPSHOT_STRINGS } = TEST_STRINGS;

describe('components/Link', () => {

  it(SNAPSHOT_STRINGS[0], () => {

    const { container } = render(<Link />);

    expect(container).toMatchSnapshot();

  });

});
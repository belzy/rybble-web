import { render } from '@testing-library/react';
import Authenticate from '../pages/authenticate';
import '@testing-library/jest-dom';

describe('pages/authenticate', () => {

  it('should render', () => {

    const { container } = render(<Authenticate />);

    expect(container).toMatchSnapshot();

  });

});
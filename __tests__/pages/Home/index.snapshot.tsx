import { render } from '@testing-library/react';
import Home from '../../../pages/index';

describe('Home snapshot', () => {

  it ('should render correctly', () => {
    
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();

  });

});
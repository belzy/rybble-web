import { render } from '@testing-library/react';
import AuthPage, { InnerContainer } from './AuthPage';
import Carousel from './Carousel/Carousel';
import '@testing-library/jest-dom';

describe('components/AuthPage', () => {

  it('should render', () => {

    const { container } = render(<AuthPage />);

    expect(container).toMatchSnapshot();

  });

});

describe('components/AuthPage/InnerContainer', () => {

  it('should render', () => {

    const { container } = render(
      <InnerContainer>
        <h1>Snapshot Test</h1>
      </InnerContainer>);

      expect(container).toMatchSnapshot();

  });

  it('should render a heading as a child', () => {

    render(
      <InnerContainer>
        <h1>Snapshot Test</h1>
      </InnerContainer>);

    

  });

});

describe('components/AuthPage/Carousel', () => {

  it('should render', () => {

    // const { container } = render(<Carousel />);

    // expect(container).toMatchSnapshot();

  });

});
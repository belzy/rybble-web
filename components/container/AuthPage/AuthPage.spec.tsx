import { render, screen } from '@testing-library/react';
import AuthPage, { InnerContainer } from './AuthPage';
import '@testing-library/jest-dom';
import { TEST_STRINGS } from '../../../constants/test.constants';

const { SNAPSHOT_STRINGS } = TEST_STRINGS;

describe('components/AuthPage', () => {

  it(SNAPSHOT_STRINGS[0], () => {

    const { container } = render(<AuthPage />);

  expect(container).toMatchSnapshot();

  });

});

describe('components/AuthPage/InnerContainer', () => {

  it(SNAPSHOT_STRINGS[0], () => {

    const { container } = render(<InnerContainer />);

      expect(container).toMatchSnapshot();

  });

  it('should render a single child', () => {

    render(
      <InnerContainer>
        <h1>Test Heading</h1>
      </InnerContainer>);

    const headings: Array<HTMLElement> = screen.getAllByRole('heading');

    expect(headings.length).toEqual(1);

  });

  it('should render 2 children', () => {

    render(
      <InnerContainer>
        <h1>Test Heading</h1>
        <h1>Test Heading</h1>
      </InnerContainer>);

    const headings: Array<HTMLElement> = screen.getAllByRole('heading');

    expect(headings.length).toEqual(2);

  });

});

describe('components/AuthPage/Carousel', () => {

  it(SNAPSHOT_STRINGS[0], () => {

    // const { container } = render(<Carousel />);

    // expect(container).toMatchSnapshot();

  });

});
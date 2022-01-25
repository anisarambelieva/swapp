import { render } from '@testing-library/react';

import Description from '../description.js';

describe('<Description />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Description
        openingCrawl="openingCrawl test"
        director="director test"
        releaseDate="releaseDate test"
      />,
    );

    expect(container).toMatchSnapshot();
  });
});

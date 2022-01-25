import { render } from '@testing-library/react';

import EpisodeHeader from '../header.js';

describe('<EpisodeHeader />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <EpisodeHeader title="Title test" subtitle="Subtitle test" />,
    );

    expect(container).toMatchSnapshot();
  });
});

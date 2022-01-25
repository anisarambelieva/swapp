import { render } from '@testing-library/react';

import Character from '../character.js';

describe('<Character />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Character imageSrc="image" name="Star wars: Episode 1" />,
    );

    expect(container).toMatchSnapshot();
  });
});

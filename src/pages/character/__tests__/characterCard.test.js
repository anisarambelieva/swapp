import { render } from '@testing-library/react';

import CharacterCard from '../characterCard.js';

describe('<CharacterCard />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <CharacterCard
        name="testname"
        imageSrc="test imageSrc"
        height="test height"
        weight="test weight"
        species="test species"
        homeWorld="test home world"
      />,
    );

    expect(container).toMatchSnapshot();
  });
});

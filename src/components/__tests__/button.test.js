import { render } from '@testing-library/react';

import Button from '../button.js';

describe('<StyledButton />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Button>Click me</Button>);

    expect(container).toMatchSnapshot();
  });

  it('should handle style props', () => {
    const { getByText } = render(
      <Button $color="black" $backgroundColor="white">
        Click me
      </Button>,
    );

    expect(getByText('Click me')).toHaveStyle(
      'color: black; backgroundColor: white;',
    );
  });
});

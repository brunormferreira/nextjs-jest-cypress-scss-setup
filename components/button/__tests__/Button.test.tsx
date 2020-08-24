import React from 'react'
import { render } from '@testing-library/react'

import Button from '../Button.component'

const MOCK = {
  onClick: (_event: React.ChangeEvent<HTMLInputElement>) => {},
  type: 'button',
  children: 'dummy-text',
}

describe('Button component', () => {
  it('should render component', () => {
    const { getByText } = render(<Button {...MOCK} />)
    const linkElement = getByText(/dummy/i)

    expect(linkElement).toBeInTheDocument()
  })
})

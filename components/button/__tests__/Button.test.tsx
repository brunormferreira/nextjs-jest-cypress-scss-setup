import React from 'react'
import { render } from '@testing-library/react'

import Button from '../Button.component'

describe('Button component', () => {
  it('should render component', () => {
    const { getByText } = render(<Button />)
    const linkElement = getByText(/TODO/i)

    expect(linkElement).toBeInTheDocument()
  })
})

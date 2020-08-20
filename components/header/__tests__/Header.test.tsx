import React from 'react'
import { render } from '@testing-library/react'

import Header from '../Header.component'

describe('Header component', () => {
  it('should render component', () => {
    const { getByText } = render(<Header />)
    const linkElement = getByText(/home/i)

    expect(linkElement).toBeInTheDocument()
  })
})

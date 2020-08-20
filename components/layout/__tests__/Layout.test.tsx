import React from 'react'
import { render } from '@testing-library/react'

import Layout from '../Layout.component'

const MOCK = {
  children: '<h1>Title</h1>',
}

describe('Layout component', () => {
  it('should render component', () => {
    const { getByText } = render(<Layout {...MOCK} />)
    const linkElement = getByText(/title/i)

    expect(linkElement).toBeInTheDocument()
  })
})

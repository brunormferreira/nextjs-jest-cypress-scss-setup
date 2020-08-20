import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Input from '../Input.component'

const MOCK = {
  type: 'text',
  name: 'Testing',
  placeholder: 'Input',
  onChange: (_event: React.ChangeEvent<HTMLInputElement>) => {},
  value: '',
}

describe('Input component', () => {
  it('should render input component', () => {
    const onChange = jest.fn()
    const INITIAL_VALUES = { ...MOCK, onChange }

    const { getByTestId } = render(<Input {...INITIAL_VALUES} />)
    const linkElement = getByTestId(/input-component/i)

    linkElement.setAttribute('value', 'Mock')
    expect(linkElement).toHaveValue('Mock')
    expect(linkElement).toBeTruthy()
  })

  it('should callback function triggered one time', () => {
    const onChange = jest.fn()
    const INITIAL_VALUE = {
      ...MOCK,
      onChange,
    }

    const { getByTestId } = render(<Input {...INITIAL_VALUE} />)
    const linkElement = getByTestId(/input-component/i)

    expect(onChange).toHaveBeenCalledTimes(0)
    fireEvent.change(linkElement, { target: { value: 'funny-data' } })
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})

describe('User actions', () => {
  it('should focus on Input', () => {
    const onChange = jest.fn()
    const INITIAL_VALUE = {
      ...MOCK,
      onChange,
    }

    const { getByTestId } = render(<Input {...INITIAL_VALUE} />)
    const linkElement = getByTestId(/input-component/i)

    linkElement.focus()
    expect(linkElement).toHaveFocus()
  })
})

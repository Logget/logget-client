import React from 'react'
import { render, screen } from '@testing-library/react'
import { LtInput } from './LtInput'

test('LtInput: Component should print input', () => {
  render(<LtInput data-test />)
  const input = screen.getByRole('textbox')
  expect(input).toContainHTML('<input')
})
test('LtInput: Component should accept input attributes', () => {
  const placeholder = 'test text'
  render(<LtInput placeholder={placeholder} />)
  const input = screen.getByRole('textbox')
  expect(input).toHaveAttribute('placeholder', placeholder)
})

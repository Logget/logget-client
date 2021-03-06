import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { LtButton } from './LtButton'
import { MemoryRouter } from 'react-router-dom'


test('LtButton: button should have role="button"', () => {
  render(<LtButton>text</LtButton>)
  const button = screen.getByRole('button')

  expect(button).toBeVisible()
})

test('LtButton: children works ok', () => {
  const text = 'This is button'
  render(<LtButton>{text}</LtButton>)
  const button = screen.getByRole('button')

  expect(button).toHaveTextContent(text)
})

test('LtButton: Convert to Link when has "to" props', () => {
  render(<MemoryRouter><LtButton to='/login'>button</LtButton></MemoryRouter>)
  const button = screen.getByRole('button')

  expect(button).toContainHTML('</a>')
})

test('LtButton: change tag based on prop', () => {
  render(<LtButton tag='div'>button</LtButton>)
  const button = screen.getByRole('button')

  expect(button).toContainHTML('</div>')
})


test('LtButton: onClick testing', () => {
  let x = 0

  const addToX = () => {
    x = 2
  }

  render(<LtButton tag='div' onClick={addToX}>button</LtButton>)
  const button = screen.getByRole('button')

  fireEvent.click(button)

  expect(x).toBe(2)
})

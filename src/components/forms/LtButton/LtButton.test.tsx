import React from 'react';
import { render, screen } from '@testing-library/react';
import { LtButton } from './LtButton'
import { MemoryRouter } from "react-router-dom";


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

test('LtButton: Convert to Link when has "to" props',() => {
  render(<MemoryRouter><LtButton to="/login">button</LtButton></MemoryRouter>)
  const button = screen.getByRole('button')

  expect(button).toContainHTML('</a>')
})

test('LtButton: change tag based on prop',() => {
  render(<LtButton tag="div" >button</LtButton>)
  const button = screen.getByRole('button')

  expect(button).toContainHTML('</div>')
})

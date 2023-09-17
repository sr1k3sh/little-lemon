/**
 * @jest-environment jsdom
 */
import { screen, render, fireEvent } from '@testing-library/react'

import { useRouter } from 'next/router'
import Banner from './Banner'

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

test('List renders with an empty query', () => {
  useRouter.mockReturnValue({
    push: () => {}
  })
  render(<Banner />)
  expect(screen.getByText('Little lemon')).toBeInTheDocument()
  expect(screen.getByText('Chicago')).toBeInTheDocument()
  expect(screen.getByText('We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.')).toBeInTheDocument()

  // Check if the "Reserve Table" button is present.
  const reserveButton = screen.getByText('Reserve Table')
  expect(reserveButton).toBeInTheDocument()

  // Simulate a button click event.
  fireEvent.click(reserveButton)
})

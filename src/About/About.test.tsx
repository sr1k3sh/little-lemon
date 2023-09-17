/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import About from './About'

it('App Router: Works with Server Components', () => {
  render(<About />)
  expect(screen.getByText('Little lemon')).toBeInTheDocument()
  expect(screen.getByText('Chicago')).toBeInTheDocument()
  expect(screen.getByText('Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.')).toBeInTheDocument()
})

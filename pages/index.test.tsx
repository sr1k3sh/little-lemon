/**
 * @jest-environment jsdom
 */
import { screen, render, fireEvent } from '@testing-library/react'

import { useRouter } from 'next/router'
import Home from './index'

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

test('List renders with an empty query', () => {
  useRouter.mockReturnValue({
    push: () => {}
  })
  render(<Home />)
})

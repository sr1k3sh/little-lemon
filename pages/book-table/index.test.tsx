/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react'

import { useRouter } from 'next/router'


import BookTablePage from './index'
import { ReservationProvider } from '@/context/ReservationContext'

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

class ResizeObserver {
  observe() {}
  unobserve() {}
}

test('List renders with an empty query', () => {
  window.ResizeObserver = ResizeObserver;

  useRouter.mockReturnValue({
    push: () => {}
  })

  render(<ReservationProvider>
      <BookTablePage />
    </ReservationProvider>)
})

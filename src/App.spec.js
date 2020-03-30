import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import App from './App'

afterEach(cleanup)

describe('App', () => {
  it('Renders without error', () => {
    render(<App />)
  })

  it('Renders counter', () => {
    const { getByText } = render(<App />)
    const count = getByText(/Count/i)
    const button = getByText(/\+/i)
    fireEvent.click(button)
    expect(count).toHaveTextContent('1')
  })
})

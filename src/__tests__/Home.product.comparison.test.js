import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { screen, within } from '@testing-library/dom'

import Home from '../components/Home/Home'

it('should show no product table and no products for comparison when none are selected', () => {
  render(<Home />)
  expect(
    screen.queryByRole('table', { name: 'compare' })
  ).not.toBeInTheDocument()
})

it('should show Cherry as a single product for comparison when clicked', () => {
  render(<Home />)

  const searchInputElement = screen.queryByRole('document', {
    name: 'Cherry'
  })
  fireEvent.click(searchInputElement)

  const table = screen.getByRole('table', { name: 'compare' })

  expect(within(table).queryByText('Cherry')).toBeInTheDocument()
  expect(within(table).queryByText('Strawberry')).not.toBeInTheDocument()
  expect(within(table).queryByText('Orange')).not.toBeInTheDocument()
  expect(within(table).queryByText('Nuts')).not.toBeInTheDocument()
})

it('should show Strawberry as a single product for comparison when clicked', () => {
  render(<Home />)
  const searchInputElement = screen.queryByRole('document', {
    name: 'Strawberry'
  })

  fireEvent.click(searchInputElement)

  const table = screen.getByRole('table', { name: 'compare' })

  expect(within(table).queryByText('Cherry')).not.toBeInTheDocument()
  expect(within(table).queryByText('Strawberry')).toBeInTheDocument()
  expect(within(table).queryByText('Orange')).not.toBeInTheDocument()
  expect(within(table).queryByText('Nuts')).not.toBeInTheDocument()
})

it('should show Orange as a single product for comparison when clicked', () => {
  render(<Home />)
  const searchInputElement = screen.queryByRole('document', {
    name: 'Orange'
  })

  fireEvent.click(searchInputElement)

  const table = screen.getByRole('table', { name: 'compare' })

  expect(within(table).queryByText('Cherry')).not.toBeInTheDocument()
  expect(within(table).queryByText('Strawberry')).not.toBeInTheDocument()
  expect(within(table).queryByText('Orange')).toBeInTheDocument()
  expect(within(table).queryByText('Nuts')).not.toBeInTheDocument()
})

it('should show Nuts as a single product for comparison when clicked', () => {
  render(<Home />)
  const searchInputElement = screen.getByRole('document', {
    name: 'Nuts'
  })

  fireEvent.click(searchInputElement)

  const table = screen.getByRole('table', { name: 'compare' })

  expect(within(table).queryByText('Cherry')).not.toBeInTheDocument()
  expect(within(table).queryByText('Strawberry')).not.toBeInTheDocument()
  expect(within(table).queryByText('Orange')).not.toBeInTheDocument()
  expect(within(table).queryByText('Nuts')).toBeInTheDocument()
})

it('should show two products for comparison', () => {
  render(<Home />)
  const strawberrySearchInputElement = screen.getByRole('document', {
    name: 'Strawberry'
  })
  const orangeSearchInputElement = screen.getByRole('document', {
    name: 'Orange'
  })

  fireEvent.click(strawberrySearchInputElement)
  fireEvent.click(orangeSearchInputElement)

  const table = screen.getByRole('table', { name: 'compare' })

  expect(within(table).queryByText('Cherry')).not.toBeInTheDocument()
  expect(within(table).queryByText('Strawberry')).toBeInTheDocument()
  expect(within(table).queryByText('Orange')).toBeInTheDocument()
  expect(within(table).queryByText('Nuts')).not.toBeInTheDocument()
})

it('should remove products from comparison when clicked', async () => {
  render(<Home />)

  const strawberrySearchInputElement = screen.queryByRole('document', {
    name: 'Nuts'
  })
  const orangeSearchInputElement = screen.queryByRole('document', {
    name: 'Cherry'
  })

  fireEvent.click(strawberrySearchInputElement)
  fireEvent.click(orangeSearchInputElement)

  const table = screen.queryByRole('table', { name: 'compare' })

  expect(within(table).queryByText('Cherry')).toBeInTheDocument()
  expect(within(table).queryByText('Strawberry')).not.toBeInTheDocument()
  expect(within(table).queryByText('Orange')).not.toBeInTheDocument()
  expect(within(table).queryByText('Nuts')).toBeInTheDocument()

  fireEvent.click(strawberrySearchInputElement)
  fireEvent.click(orangeSearchInputElement)

  expect(within(table).queryByText('Cherry')).not.toBeInTheDocument()
  expect(within(table).queryByText('Strawberry')).not.toBeInTheDocument()
  expect(within(table).queryByText('Orange')).not.toBeInTheDocument()
  expect(within(table).queryByText('Nuts')).not.toBeInTheDocument()
})

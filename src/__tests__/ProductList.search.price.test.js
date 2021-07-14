import React from 'react'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import { ProductList } from '../components'
import results from '../data/products.json'

it('should display products Cherry, Nuts, and Strawberry when the number 2 is input for price less than or equal to $2.00', () => {
  render(<ProductList products={results.products} nameSearch={'2'} />)

  expect(screen.queryByText('Strawberry')).toBeInTheDocument()
  expect(screen.queryByText('Cherry')).toBeInTheDocument()
  expect(screen.queryByText('Nuts')).toBeInTheDocument()
  expect(screen.queryByText('Orange')).not.toBeInTheDocument()
})

it('should display products Nuts when the number 1.30 is input for price less than or equal to $1.30', () => {
  render(<ProductList products={results.products} nameSearch={'1.30'} />)

  expect(screen.queryByText('Strawberry')).not.toBeInTheDocument()
  expect(screen.queryByText('Cherry')).not.toBeInTheDocument()
  expect(screen.queryByText('Nuts')).toBeInTheDocument()
  expect(screen.queryByText('Orange')).not.toBeInTheDocument()
})

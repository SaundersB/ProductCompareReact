import React from 'react'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import { ProductList } from '../components'
import results from '../data/products.json'

it('should display product Strawberry when STR is input', async () => {
  render(<ProductList products={results.products} nameSearch={'STR'} />)

  expect(screen.queryByText('Strawberry')).toBeInTheDocument()
  expect(screen.queryByText('Cherry')).not.toBeInTheDocument()
  expect(screen.queryByText('Nuts')).not.toBeInTheDocument()
  expect(screen.queryByText('Orange')).not.toBeInTheDocument()
})

it('should display products Strawberry and Cherry when ERRY is input', () => {
  render(<ProductList products={results.products} nameSearch={'ERRY'} />)

  expect(screen.queryByText('Strawberry')).toBeInTheDocument()
  expect(screen.queryByText('Cherry')).toBeInTheDocument()
  expect(screen.queryByText('Nuts')).not.toBeInTheDocument()
  expect(screen.queryByText('Orange')).not.toBeInTheDocument()
})

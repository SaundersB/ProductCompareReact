import React from 'react'
import { Product } from '..'

const ProductList = ({ products, compare, nameSearch }) => {
  const renderProducts = () => {
    // The input search field is not functioning like expected.
    // Fix it so that it can filter the rendered product list by name.
    // If we type 3 characters it should search locally and return only the matching products.
    return products;
  }

  return (
    <div className="row mt-3">
      {renderProducts().map(product => (
        <Product key={product.id} product={product} compare={compare} />
      ))}
    </div>
  )
}

export default ProductList

import React from 'react'
import './styles.css'

const Product = ({ product, compare }) => (
  <div key={product.id} className="col-sm-6 col-md-3" data-testid={product.name}>
    <div className={'product ' + (product.compare ? 'compare' : '')}>
      <img src={product.image} alt={product.name} />
      <div className="image_overlay" />
      <div
        aria-label={product.name}
        role="document"
        className="view_details"
        onClick={() => compare(product.id)}
      >
        {product.compare ? 'Remove' : 'Compare'}
      </div>
      <div className="stats">
        <div className="stats-container">
          <span className="product_price">{product.price}</span>
          <span className="product_name">{product.name}</span>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  </div>
)

export default Product

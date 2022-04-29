import React from 'react'
import "./Product.css"

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>Black stallion from arabia</p>
        <p className='product__price'>
          <small>$</small>
          <strong>3,000</strong>
        </p>
        <div className="product__rating">⭐⭐⭐</div>
      </div>

      <img src="https://res.cloudinary.com/nell1818/image/upload/v1651252535/eshop/images_xjlpix.jpg" alt="horse" />
      <button>Add to Basket</button>

    </div>
  )
}

export default Product

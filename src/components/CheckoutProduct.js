import React from 'react'
import "./CheckoutProduct.css"

function CheckoutProduct() {
  return (
    <div className="checkoutPorduct">
      <img src='https://res.cloudinary.com/nell1818/image/upload/v1651252541/eshop/images_okjmco.jpg' alt='' className='checkoutProduct_image' />

      <div className="product__info">
        <p className="checkoutProduct__title">3 yrs old
        </p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>1,000</strong>
        </p>
        <div className="checkoutProduct__rating">
          ⭐⭐
        </div>
        <button>Remove from Stable</button>
      </div>
    </div>
  )
}



export default CheckoutProduct
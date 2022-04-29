import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
  return (
    <div className='checkout'>
      <div className="checkout__left">
        <img src="https://res.cloudinary.com/nell1818/image/upload/v1651258954/eshop/horsebanner_bi508m.jpg" alt="banner" className="checkout_ad" />
        <div>
          <h2 className='checkout__title'>
            Your Stable
          </h2>
          <CheckoutProduct />
        </div>
      </div>
      <div className="checkout__right">
        

      </div>
    </div>
  )
}

export default Checkout
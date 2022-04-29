import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal.js'

function Checkout() {
  return (
    <div className='checkout'>
      <div className="checkout__left">
        <img src="https://res.cloudinary.com/nell1818/image/upload/v1651263604/eshop/Untitled_design_18_r78gdn.png" 
        alt="banner" 
        className="checkout_ad" />
        <div>
          <h2 className='checkout__title'>
            Your Stable
          </h2>
          <CheckoutProduct />
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}


export default Checkout
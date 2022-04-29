import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <div className="home__row">
            <Product />
            <Product />
          </div>

          <div className="home__row">
            <Product />
            <Product />
            <Product />
          </div>

          <div className="home__row">
            <Product />
            <Product />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
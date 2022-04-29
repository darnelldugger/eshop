import React from 'react'
import "./Home.css"
import Product from './Product.js'

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <div className="home__row">
            <Product
              id="1224242"
              title="1 yrs old"
              price={700.33}
              rating={5}
              image="https://res.cloudinary.com/nell1818/image/upload/v1651252535/eshop/images_xjlpix.jpg" alt="horse"
            />
            <Product
              id="7638325"
              title="2yrs old"
              price={6000.222}
              rating={1}
              image="https://res.cloudinary.com/nell1818/image/upload/v1651252589/eshop/GettyImages-898377636-cb49f5c0b57140af9a7d6d3b8be1100e_jbfzyy.jpg" alt="horse"
            />
          </div>

          <div className="home__row">
            <Product
              id="2346548453"
              title="5yrs old"
              price={4344.55}
              rating={5}
              image="https://res.cloudinary.com/nell1818/image/upload/v1651252541/eshop/images_okjmco.jpg" alt="horse"
            />
            <Product
              id="23576792"
              title="10 yrs old"
              price={6376}
              rating={3}
              image="https://res.cloudinary.com/nell1818/image/upload/v1651252513/eshop/z3mhwzo9obvwmzrtfnky.jpg" alt="horse"
            />
            <Product
              id="457638"
              title="4 yrs old"
              price={2000}
              rating={5}
              image="https://res.cloudinary.com/nell1818/image/upload/v1651252520/eshop/dc9yq76cfyrvedlgprxs.jpg" alt="horse"
            />
          </div>

          <div className="home__row">
            <Product
              id="2643326"
              title="6 yrs old"
              price={5000}
              rating={4}
              image="https://res.cloudinary.com/nell1818/image/upload/v1651252551/eshop/images_bwfs1x.jpg" alt="horse"
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
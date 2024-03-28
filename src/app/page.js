import './globals.css'
import Image from 'next/image'
import hero1 from '../public/hero1.webp'
import hero2 from '../public/hero2.webp'
import hero3 from '../public/hero3.webp'
import hero4 from '../public/hero4.webp'
import product1 from '../public/product1.webp'
import product2 from '../public/product2.jpeg'
import product3 from '../public/product3.jpeg'

function page() {
  return (
    <>
    <div className="container">
      <div className="banner">
        <div className="text">
          <h1>We are changing the way people shop</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
          <button className="btn">OUR PRODUCTS</button>
        </div>
        <div className="main-raight carousel">
          <div className="carousel_item">
                <Image
                src={hero1}
                />
           </div>
           <div className="carousel_item">
           <Image
                src={hero2}
                />
           </div>
           <div className="carousel_item">
           <Image
                src={hero3}
                />
           </div>
           <div className="carousel_item">
           <Image
                src={hero4}
                />
           </div>               
      </div>
      </div>
      <div className="featured_products">
        <h1>Featured Products</h1>
        <hr />
        <div className="products">
          <div className="product">
          <Image
                src={product1}
                />
            <div className="info">
              <h2>Avant-garde lamp</h2>
              <p>$179.99</p>
            </div>
          </div>
          <div className="product">
          <Image
                src={product2}
                />
            <div className="info">
              <h2>Coffee table</h2>
              <p>$179.99</p>
            </div>
          </div>
          <div className="product">
          <Image
                src={product3}
                />
            <div className="info">
              <h2>Comfy Bed</h2>
              <p>$129.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default page
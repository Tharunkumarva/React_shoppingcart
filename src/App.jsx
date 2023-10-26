import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import imageSrc from './assets/6c757d.jpg';


function ProductCard({ name, price }) {
  const [isInCart, setIsInCart] = useState(true);

  const handleAddToCartButtonClick = () => {
    setIsInCart(!isInCart);
  }

  return (
    <div className='col-3'>
      <div className='border p-3 d-inline-block' style={{ display: 'flex', flexDirection: 'column' }}>
        <div className='img-1'>
          <img src={imageSrc} alt={name} className='img-fluid' />
          <div className='nameofproduct row text-center'>
            <h5>{name}</h5>
            <p>{price}</p>
          </div>
        </div>
        <div className="footer-1 mt-1 row text-center">
          <button onClick={handleAddToCartButtonClick}>
            {isInCart ? "Add to Cart" : "Remove from Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-4 mt-5 mb-5'>
          <header className='h2'>Start Bootstrap</header>
        </div>
        <div className='col-4 mt-5 mb-5'>
          <ul className='orderul d-flex list-unstyled justify-content-between'>
            <li className='mr-2'>Home</li>
            <li className='mr-2'>About</li>
            <li className='mr-2'>
              <label>Shop</label>
              <select className='opplist'>
                <option>All products</option>
                <option>popular Items</option>
                <option>New Arrivals</option>
              </select>
            </li>
          </ul>
        </div>
        <div className='col-4 mt-5 mb-5  justift-content-center'>
          <form class="d-flex">
            <button class="btn btn-outline-dark" type="submit">
              <i class="bi-cart-fill me-1"></i>
              Cart
              <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
            </button>
          </form>
        </div>
      </div>

      <div className='row text-center' style={{ backgroundColor: 'black', color: 'white' }}>
        <div className='col-12 mt-5 mb-5'>
          <h1>Shop in style</h1>
          <p>with this homepage template</p>
        </div>
      </div>

      <div className='row mt-5'>
        <ProductCard name="Fancy products" price="$40.00 - $80.00" />
        <ProductCard name="Sale Item"   price="$40.00 - $80.00" />
        <ProductCard name="Popular Item" price="$40.00 - $80.00" />
        <ProductCard name="Special Item" price="$40.00 - $80.00" />
        </div>
        <div className='row mt-5 mb-5'>


        <ProductCard name="Fancy products"price="$40.00 - $80.00" />
        <ProductCard name="Popular Item" price="$40.00 - $80.00" />
        <ProductCard name="Popular Item" price="$40.00 - $80.00" />
        <ProductCard name="Popular Item" price="$40.00 - $80.00" />
        </div>
      

      <div className='row'>
        <footer class="py-5 bg-dark">
          <div class="container">
            <p class="m-0 text-center text-white">Copyright &copy; Your Website 2023</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
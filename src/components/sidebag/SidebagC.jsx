import React from 'react';
import './Sidebag.css';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

const Sidebag = (props) => {
  const products = useSelector((state) => state.cart.products);
  return (
    
    <div className=' class-c mt-1'>
      <h2 className='text-center txt-2 txt-3'>Bag</h2>
      <div className='row cart-items'>
        {products.map((product, index) => (
          <div key={index} className='cart-item col-3'>
            <img src={product.image} alt={product.name} className="cart-item-image-2" height='80' width='80' />
          </div>
        ))}
      </div>
      <button onClick={props.event} className=' btnBag3 p-md-3 position-relative display-none'><Link to={props.link} className='view-bag-button'><i class="bi bi-bag-fill"></i>{props.caption}</Link></button>
    </div>
  );
};

export default Sidebag;
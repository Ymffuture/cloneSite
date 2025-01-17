import React from 'react';
import './Sidebag.css';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

const Sidebag = (props) => {
  const products = useSelector((state) => state.cart.products);

  return (
    
    <div className=' class-a mt-2'>

      <h2 className='text-center txt-2'>Bag</h2>
      <div className='row cart-items'>
        {products.map((product, index) => (
          <div key={index} className='cart-item col-4'>
            <img src={product.image} alt={product.name} className="cart-item-image" height='70' width='70' />
          </div>
        ))}
      </div>
      <button onClick={props.event} className='btnBag'><Link to={props.link} className='view-bag-button-2'><i class="bi bi-bag-fill"></i>{props.caption}</Link></button>
    </div>
  );
};

export default Sidebag;
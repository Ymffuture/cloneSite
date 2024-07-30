import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../../jsApp/redux/Actions';
import Rating from '../Rating';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CheckBagItems.scss';

const CheckBagItems = () => {
    const cartItems = useSelector(state => state.cart.products);
    const dispatch = useDispatch();

    const handleIncrease = (productId) => {
        dispatch(increaseQuantity(productId));
    };

    const handleDecrease = (productId) => {
        dispatch(decreaseQuantity(productId));
    };

    return (
        <div className="container-2">
        <h1>Check you Bag Items</h1>
        <div className='line-2'></div>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cartItems.map(products => (
                    <div key={products.id} className="row mb-4">
                        <div className="col-md-3" style={{background: '#ffff', borderTopLeftRadius: '30px', borderBottomLeftRadius: '30px'}}>
                            <img src={products.image} alt={products.name} className="img-fluid" />
                        </div>
                        <div className="col-md-6" style={{background: '#ffff'}} >
                            <h5>{products.name}</h5>
                            <p>{products.smallDescription}</p>
                            <p>{products.description}</p>
                            <h3><Rating stars={products.rating}/> <small style={{color: '#12805D'}}> {products.rating} / 5</small></h3>
                            <p>${products.price} <small> x {products.quantity}</small></p>
                        </div>
                        <div className="col-md-3 quantity-controls" style={{background: '#ffff', borderTopRightRadius: '30px', borderBottomRightRadius: '30px'}}>
                            <button className="btn-dec" onClick={() => handleDecrease(products.id)}>-</button>
                            <p className="mx-2">{products.quantity}</p>
                            <button className="btn-inc" onClick={() => handleIncrease(products.id)}>+</button>
                        </div>
                    </div>
                ))
            )}
           
        </div>
        
    );
};

export default CheckBagItems;

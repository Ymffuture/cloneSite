import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../App.css';
import './ProductList.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/actions';
import Products from './Lists';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ProductList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');

    useGSAP(()=>{
    gsap.to('#pics' , {opacity: 1, duration: 1, delay: 1})
    },[])


    const handleItemView = (product) => {

       navigate('/item-view', {state: {product} });
    };

    const handleAddToCart = (product) => {
        dispatch(addToCart(product, 1));
    }

    const filteredProducts = Products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='product-list'>
                  <div className='line'></div>
            <div className='container'>
                <div className="search-bar mt-4 mb-4 mx-auto justify-content-center" style={{ maxWidth: '50%' }}>
                    <label className="search-label" htmlFor="search">Search Item</label>
                    <input
                        type="text"
                        id="search"
                        className="form-control search-box"
                        placeholder="Apple Watch, Samsung 21, Macbook Pro"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        
                    />
                </div>
            <div className='row'>
                {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                    <div key={product.id} className='col-lg-3 col-md-3 col-sm-12 mb-4'>
                        <div  id='pics' className='card bg-transparent justify-content-center vw-60 border-0 bg-white' >
                            <img src={product.image} alt={product.name} className="card-image mx-auto d-block" height='230' width='190' onClick={() => handleItemView(product)} />
                            <div className="card-content d-flex flex-column">
                                <div className="card-title">{product.name}</div>
                                <div className="card-description">{product.smallDescription}</div>
                                <div className="row action">
                                    <div className="col-sm-6 col-md-6 col-lg-6 card-price">$ {product.price}</div>
                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                    <button className='btn' onClick={() => handleAddToCart(product)}>
                                        <i className='bi bi-bag-plus-fill'></i>
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                ) : (
                    <div className="col-12">
                        <p>No results</p>
                    </div>
                )}
            </div>
        </div>
        </div>
    );
};

export default ProductList;
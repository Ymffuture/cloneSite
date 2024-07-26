import React from 'react';
import ReviewBag from '../components/ReviewBag';
import Address from '../components//AddAdress/Address';
import Payment from '../components/Payment';
import OrderSummary from '../components/summary/OrderSummary';

const Checkout = () => {
   
    return(
        <div className='container'>
        <div className='row md-4'>
            <div className='col-md-9'>
                <Address/>
                <Payment/>
                <ReviewBag/>
            </div>
            <div className='col-md-3'>
                <OrderSummary />
            </div>
            </div>
        </div>
    )
}

export default Checkout;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CheckBagItems from '../components/checkbag/CheckBagItems';
import SidebagB from '../components/sidebag/SidebagB';
import Sidebar from '../components/sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';



const CheckBag = () => {
    const navigate = useNavigate()

    const gotToCheckoutPage=()=>{
        navigate('/checkout');
    }
    
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-1">
                <Sidebar/>
                </div>
                <div className="col-6 p-12 ">
                <CheckBagItems/>
                  
                </div>
                <div className="col-2">
                <SidebagB event = {() => gotToCheckoutPage()} caption = "  Checkout" />
                </div>
            </div>
        </div>      
        </>
    )
}

export default CheckBag;
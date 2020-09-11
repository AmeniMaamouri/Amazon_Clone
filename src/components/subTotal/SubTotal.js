import React, { useState, useEffect, useContext } from 'react'
import './subTotal.css'

import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import { getBasketTotal } from '../../reducers/basketReducer';

const SubTotal = ({ basketItems }) => {

    return (
      
            <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basketItems.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basketItems)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <Link to='/payment'><button className='procced_btn'>Proceed to Checkout</button></Link>
        </div> 
     
    );
}

export default SubTotal;
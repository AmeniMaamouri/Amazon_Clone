import React, { useContext, useState, useEffect } from 'react'
import './subTotal.css'

import CurrencyFormat from 'react-currency-format';

const SubTotal = ({ basketItems }) => {

    let [totalPrice, setTotalPrice] = useState(0)
    
   useEffect(()=> {
    setTotalPrice(0)
    basketItems.map(item => {
         setTotalPrice(prev => prev + item.price)
    })
   },[basketItems])


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
                value={totalPrice}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to Checkout</button>
        </div>
    );
}

export default SubTotal;
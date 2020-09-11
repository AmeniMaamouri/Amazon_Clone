import React, { useState, useEffect } from 'react'
import './subTotal.css'

import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router-dom';

const SubTotal = ({ basketItems }) => {

    let [totalPrice, setTotalPrice] = useState(0)
    const [loading, setLoading] = useState(true)
    const history = useHistory()

   useEffect(()=> {
    setTotalPrice(0)
    basketItems.map(item => {
         setTotalPrice(prev => prev + item.price*item.amount)
    })
    setLoading(false)
   },[basketItems])

   const handleClick = () =>  {
    history.push('/payment')
   }


    return (
        <div>
            {loading === false ? <div className="subtotal">
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

            <button onClick={handleClick}>Proceed to Checkout</button>
        </div> : null}
        </div>
    );
}

export default SubTotal;
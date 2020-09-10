import React, { useContext } from 'react'
import './checkout.css'
import SubTotal from '../subTotal/SubTotal'
import { BasketContext } from '../../contexts/BasketContext'
import CheckoutProduct from '../checkoutProduct/CheckoutProduct'
import FlipMove from 'react-flip-move'

const Checkout = () => {
    const { basketItems } = useContext(BasketContext)

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
                <div>


                    {basketItems != '' ? (
                        <div>
                            <h2 className="checkout__title">Your shopping Basket</h2>
                            
                          
                            {basketItems.map(item => {
                                return <CheckoutProduct item={item}  />
                            })}
                           
                        </div>
                    ) : (<div>
                        <h2>Your Shopping Basket is empty</h2>
                        <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
                    </div>)}

                </div>
            </div>
            <div className="checkout__right">
                <SubTotal basketItems={basketItems} />
            </div>
        </div>
    );
}

export default Checkout;
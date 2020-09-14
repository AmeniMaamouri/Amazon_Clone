import React, { useContext, useEffect, useState } from 'react'
import CheckoutProduct from '../checkoutProduct/CheckoutProduct'
import { BasketContext } from '../../contexts/BasketContext';
import { Link } from 'react-router-dom';
import './payment.css'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { getBasketTotal } from '../../reducers/basketReducer';
import { db } from '../../config'
import { AuthContext } from '../../contexts/AuthContext';
const Payment = () => {

    const { basketItems, dispatch } = useContext(BasketContext)
    const { user } = useContext(AuthContext)
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(true)
    const [processing, setProcessing] = useState('')
    const [succeeded, setSucceeded] = useState(false)
    const stripe = useStripe()
    const history = useHistory()
    const elements = useElements()



    useEffect(() => {
        axios.post(`http://localhost:5001/clone-67d06/us-central1/api/payments/create?total=${getBasketTotal(basketItems) * 100}`)
            .then(res => {
                console.log(res)
                setClientSecret(res.data.clientSecret)
            }).catch(err => console.log(err))

    }, [basketItems])


    const handleSubmit = async (e) => {
        e.preventDefault()
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            db.collection('users')
                .doc(user.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basketItems,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            history.replace('/orders')
            dispatch({ type: 'EMPTY_BASKET' })
        })

    }


    const handleChange = (e) => {
        setDisabled(e.empty)
        setError(e.error ? e.error.message : null)
    }


    return (
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout (<Link to="/checkout">{basketItems.length} items</Link>)</h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p></p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basketItems && basketItems.map(item => {
                            return <CheckoutProduct id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                qty={item.qty} />
                        })}

                    </div>
                </div>
                <div class="payment__section">
                    <div class="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div class="payment__details">
                        <p style={{ fontWeight: 'bold', color: 'red' }}>{error && error}</p>
                        <h4>Card Details</h4>
                        <form onSubmit={handleSubmit}>

                            <CardElement onChange={handleChange} />
                            <div class="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basketItems)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
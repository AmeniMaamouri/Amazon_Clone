import React, { useContext, useState, useEffect } from 'react'
import { BasketContext } from '../../contexts/BasketContext';
import './checkoutProduct.css'
import FlipMove from 'react-flip-move'

const CheckoutProduct = ({ item }) => {

    const { dispatch } = useContext(BasketContext)
    const [amount, setAmount] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        setAmount(item.amount)
        setLoading(false)
    },[item.amount])

    const handleClick = () => {
        dispatch({ type: 'REMOVE_BASKET', id: item.id })
    }

    const handleChange = (e) => {
        setAmount(e.target.value)
        
    }

    const handleSubmit = (e) => {
       e.preventDefault()
        dispatch({ type: 'EDIT_BASKET_AMOUNT', amount, id: item.id })
    }
    

    
    return (
       <div>
           {loading === false ?  <FlipMove leaveAnimation="fade">
        <div className="checkoutProduct" key={item.id}>
            <img className="checkoutProduct__image" src={item.image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{item.title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{item.price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(item.rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                <form onSubmit={handleSubmit} style={{marginTop:'10px'}}>
                    <label style={{fontWeight:'500'}}>Qty : </label>
                    <input type="number" min="1"  style={{width:'40px'}} name='amount' value={amount} onChange={handleChange} />
                    <button style={{marginLeft:'3px'}} type='submit'>Update</button>
                </form>
                <button onClick={handleClick}>Remove from basket</button></div>
        </div>
        </FlipMove> : null}
       </div>
    );
}

export default CheckoutProduct;
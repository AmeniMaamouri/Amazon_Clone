import React, { useContext, useState, useEffect } from 'react'
import { BasketContext } from '../../contexts/BasketContext';
import './checkoutProduct.css'
import FlipMove from 'react-flip-move'

const CheckoutProduct = ({ id, title, image, price, rating ,qty }) => {

    const { dispatch } = useContext(BasketContext)
    const [quantity, setQty] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        setQty(qty)
        setLoading(false)
    },[qty])

    const handleClick = () => {
        dispatch({ type: 'REMOVE_BASKET', id })
    }

    const handleChange = (e) => {
        setQty(e.target.value)
        
    }

    const handleSubmit = (e) => {
       e.preventDefault()
        dispatch({ type: 'EDIT_BASKET_AMOUNT', qty: quantity, id })
    }
    

    
    return (
       <div>
           {loading === false ?  <FlipMove leaveAnimation="fade">
        <div className="checkoutProduct" key={id}>
            <img className="checkoutProduct__image" src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                <form onSubmit={handleSubmit} style={{marginTop:'10px'}}>
                    <label style={{fontWeight:'500'}}>Qty : </label>
                    <input type="number" min="1"  style={{width:'40px'}} name='qty' value={quantity} onChange={handleChange} />
                    <button style={{marginLeft:'3px'}} type='submit'>Update</button>
                </form>
                <button onClick={handleClick}>Remove from basket</button></div>
        </div>
        </FlipMove> : null}
       </div>
    );
}

export default CheckoutProduct;
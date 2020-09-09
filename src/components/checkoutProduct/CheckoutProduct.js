import React, { useContext } from 'react'
import { BasketContext } from '../../contexts/BasketContext';

const CheckoutProduct = ({ item }) => {

    const { dispatch } = useContext(BasketContext)

    const handleClick = () => {
        dispatch({ type: 'REMOVE_BASKET', id: item.id })
    }
    return (
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
                <button onClick={handleClick}>Remove from basket</button></div>
        </div>
    );
}

export default CheckoutProduct;
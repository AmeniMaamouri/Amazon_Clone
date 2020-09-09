import React, { useContext } from 'react'
import './product.css'
import { BasketContext } from '../../contexts/BasketContext'


const Product = ({ id, title, price, image, rating }) => {
    const {dispatch} = useContext(BasketContext)

    const handleClick = () => {
        dispatch({type: 'ADD_BASKET', product: {
            title,price,image,rating
        } })
    }

    return (
        <div className='product' key={id}>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
               
            </div>
            <img src={image} />
            <button onClick={handleClick}>Add to Basket</button>
        </div>);
}

export default Product;
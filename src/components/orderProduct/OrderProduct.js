import React from 'react'

import './orderProduct.css'


const OrderProduct = ({ id, title, image, price, rating ,qty }) => {

   
    return (
      
        <div className="checkoutProduct" key={id}>
            <img className="checkoutProduct__image" src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{`${qty}X - ${title}`}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
        </div>
      
       </div>
    );
}

export default OrderProduct;
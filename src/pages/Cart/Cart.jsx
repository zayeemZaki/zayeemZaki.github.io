import React from 'react';

import { useNavigate } from 'react-router-dom';


const Cart = ({cart}) => {
    const navigate = useNavigate();
  
    const handleContinueShopping = () => {
      navigate('/');
    };
  
    const handleCheckOut = () => {
      navigate('/CheckOut');
    };
    if (!cart) {
      return <p>cart not defined.</p>;
    }
  
    return (
      <div>
        <h1>Shopping Cart Page</h1>
        {cart.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>Price: {item.price}</p>
            <p>Tags: {item.tags.join(', ')}</p>
          </div>
        ))}

        <button type="button" className="custom__button" onClick={handleContinueShopping}>
          Continue Shopping
        </button>
        <button type="button" className="custom__button" onClick={handleCheckOut}>
          Checkout
        </button>
      </div>
    );
  };

  export default Cart;
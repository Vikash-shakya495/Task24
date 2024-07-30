import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

const AddProduct = ({ item }) => {
  const { cart, setCart, isPaymentView } = useContext(AppContext);

  const addValue = () => {
    const newCart = cart.map(cartItem =>
      cartItem.productName === item.productName ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    setCart(newCart);
  };

  const removeValue = () => {
    const newCart = cart.map(cartItem =>
      cartItem.productName === item.productName ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    ).filter(cartItem => cartItem.quantity > 0);

    setCart(newCart);
  };

  return (
    <div className='bg-[#010926] text-[#dcf6fe] w-full p-4 flex justify-evenly items-center rounded-lg'>
      <div className="w-20 h-20">
        <img src={item.img} alt={item.productName} className='w-full h-full rounded-lg'/>
      </div>
      <div className="w-2/5 flex flex-col justify-center items-center">
        <h3>{item.productName}</h3>
        <p>₹{item.price}</p>
      </div>
      <div className='w-1/3 p-2 flex justify-around items-center rounded-l-lg'>
        <button
          className={`w-10 h-10 border-none rounded-lg ${isPaymentView ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#e32f1b]'} text-white text-xl`}
          onClick={removeValue}
          disabled={isPaymentView}
        >
          −
        </button>
        {item.quantity}
        <button
          className={`w-10 h-10 border-none rounded-lg ${isPaymentView ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-600'} text-white text-xl`}
          onClick={addValue}
          disabled={isPaymentView}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default AddProduct;

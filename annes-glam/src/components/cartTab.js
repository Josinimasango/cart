import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import CartItem from './cartItem';
import { toggleStatusTab } from '../stores/cart';

const CartTab = () => {
  const carts = useSelector((store) => store.cart.items);
  const statusTab = useSelector((store) => store.cart.statusTab);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };

  const handleCheckout = () => {
    navigate('/PaymentForm'); // Redirect to the payment route
  };

  return (
    <div
      className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px]
      transform transition-transform duration-500
      ${statusTab === false ? 'translate-x-full' : ''}
      `}
    >
      <h2 className='p-5 text-white text-2xl'>Shopping bag</h2>
      <div className='p-5'>
        {carts.map((item, key) => (
          <CartItem key={key} data={item} />
        ))}
      </div>
      <div className='grid grid-cols-2'>
        <button className='bg-black text-white' onClick={handleCloseTabCart}>
          CLOSE
        </button>
        <button className='bg-white text-black' onClick={handleCheckout}>
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartTab;



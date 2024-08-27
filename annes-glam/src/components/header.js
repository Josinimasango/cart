import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import iconCart from '../assets/images/iconCart.png';
import brush from '../assets/images/brush.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatusTab } from '../stores/cart';

const Header = () => {
    const [totalQuantity, setTotalQuantity] = useState(0);
    const carts = useSelector(store => store.cart.items);
    const dispatch = useDispatch();

    useEffect(() => {
        let total = 0;
        carts.forEach(item => total += item.quantity);
        setTotalQuantity(total);
    }, [carts]);

    const handleOpenTabCart = () => {
        dispatch(toggleStatusTab());
    };

    return (
        <header className='relative flex flex-col items-center mb-5'>
            <div 
                className='text-center bg-black text-white p-5 w-full'
                style={{ 
                    backgroundImage: `url(${brush})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '350px'
                }}
            >
                <Link to="/" className='text-3xl font-bold italic font-serif'>ANNE's GLAM💋</Link>
                <p className='text-sm mt-2'>Your go-to place for the latest in beauty and fashion.</p>
            </div>

       
            <div 
                className='fixed top-4 right-4 w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center cursor-pointer' 
                onClick={handleOpenTabCart}
            >
                <img src={iconCart} alt="Cart Icon" className='w-6'/>
                <span className='absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center'>
                    {totalQuantity}
                </span>
            </div>
        </header>
    );
};

export default Header;

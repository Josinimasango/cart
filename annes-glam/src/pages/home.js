import React from 'react';
import { products } from '../products';
import ProductCart from '../components/productCart';
import deliveryImage from '../assets/images/delivery.jpg';

const Home = () => {
  const firstSet = products.slice(0, Math.ceil(products.length / 2));
  const secondSet = products.slice(Math.ceil(products.length / 2));

  return (
    <div>
      <h1 className="text-5xl my-5 font-bold italic text-center">
        Latest Trends
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {firstSet.map((product, key) => (
          <ProductCart key={key} data={product} />
        ))}
      </div>

      <h1 className="text-5xl my-5 font-bold italic text-center">
        Special Offers
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {secondSet.map((product, key) => (
          <ProductCart key={key} data={product} />
        ))}
      </div>

      {/* New section with image and text side by side */}
      <div className="flex items-center justify-center my-10 p-5 bg-white shadow-lg rounded-lg">
        <img 
          src={deliveryImage} 
          alt="Delivery" 
          className="w-20 h-20 object-cover rounded-lg mr-5" 
        />
        <p className="text-xl font-semibold">
          Get your products delivered to you in 24 hours.
        </p>
      </div>
    </div>
  );
};

export default Home;







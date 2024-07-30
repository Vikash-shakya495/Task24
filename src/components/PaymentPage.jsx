// PaymentPage.js
import React from 'react';

const PaymentPage = () => {
  return (
    <div className='p-2  rounded-md'>
      <form className='flex flex-col'>
        <div className='flex items-center text-2xl gap-4'>
          <div className='flex items-center gap-4'>
            <label>Cash On Delivery : </label>
            <input type='radio' name='cash'/>
          </div>
          <div className='flex p-8 items-center gap-4'>
            <label>Credit Card : </label>
            <input type='radio' name='cash'/>
          </div>
        </div>
        <div className='mb-4'>
          <label className='block font-medium text-gray-700'>Card Number</label>
          <input type='text' className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2' placeholder="Enter Your Card Number" />
        </div>
        <div className='mb-4'>
          <label className='block font-medium text-gray-700'>Expiry Date</label>
          <input type='text' className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2' placeholder="Enter Your Card's Expiry Date" />
        </div>
        <div className='mb-4'>
          <label className='block font-medium text-gray-700'>CVV</label>
          <input type='text' className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2' placeholder="Enter Your CVV Number" />
        </div>
        <button type='submit' className='bg-green-500 text-white p-2 rounded-lg'>Submit Payment</button>
      </form>
    </div>
  );
};

export default PaymentPage;

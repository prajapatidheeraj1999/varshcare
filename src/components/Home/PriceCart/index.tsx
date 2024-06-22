import RightIcon from '@/components/Icon/RightIcon';
import Button from '@/components/UI/Button';
import React from 'react';

type Test = {
  name: string;
  details: string;
  price: number;
  discount: number;
  includedTests: string[];
};

type PricingCartProps = {
  tests: Test[];
};

const PricingCart: React.FC<PricingCartProps> = ({ tests }) => {
  return (
    <div className=" max-w-6xl mx-auto mt-4">
      <h2 className="text-2xl font-bold mb-4">Available Tests</h2>
      <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {tests.map((test, index) => {
          const discountedPrice = test.price * (1 - test.discount / 100);
          return (
            <div key={index} className="bg-primary-100 p-4 rounded-lg shadow-lg border border-solid border-text-3 lg:w-64  lg:h-auto w-72 h-auto">
              <h3 className="text-xl font-semibold mb-2">{test.name}</h3>
              <div className="flex gap-1  py-2 ">
                  <span className="text-red-500 line-through ">Rs {test.price.toFixed(2)}</span>
                  <span className="  text-primary-900 font-bold ml-2">Rs {discountedPrice.toFixed(2)}</span>
                </div>
              <p className="text-gray-700 mb-2">{test.details}</p>
              <div className='flex flex-col gap-3'>
                {test.includedTests.map((includedTest, i) => (
                  <div key={i} className="flex gap-3 text-sm items-center"> <span><RightIcon/></span><span className='text-text-5'>{includedTest}</span></div>
                ))}
              </div>
              
              <div className="flex justify-center mt-5">
              
                <Button size='md' >Book Test</Button>
                
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingCart;

import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Carts from '../../components/Carts/Carts';
const MyCart = () => {
    const carts=useLoaderData();
    console.log(carts);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
          
           
                {
                    carts?.map(cart => <Carts key={cart.name} cart={cart}> </Carts>)
                }

              
        </div>
    );
};

export default MyCart;
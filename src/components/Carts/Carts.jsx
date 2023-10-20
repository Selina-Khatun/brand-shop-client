import React from 'react';

const Carts = (cart) => {
    const {_id, name, photo, brand, price, category, ratings, description }=cart

    return (
        <div >
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={name} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{_id}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        
                        <button className="btn btn-primary">delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carts;
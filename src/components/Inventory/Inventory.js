import React from 'react';


const inventory = () => {

    const handleAddProduct = () => {
        const product = {}
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: {
                'content-Type' : 'application/json'
            },
            body : JSON.stringify(product)
        })
    }


    return (
        <div>
            <form action="">
                <p><span>Name: </span><input type="text"/></p>
                <p><span>price: </span><input type="text"/></p>
                <p><span>Quantity: </span><input type="text"/></p>
                <p><span>Product Image: </span><input type="file"/></p>
            <button onClick={handleAddProduct}>Add Product</button>
            </form>
        </div>
    );
};

export default inventory;

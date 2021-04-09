import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [shippingData, setShippingData] = useState(null);


    const onSubmit = data => {
        setShippingData(data);
    };


    const handlePaymentSuccess = paymentId => {
        const savedCart = getDatabaseCart();
        const orderDetails = {
            ...loggedInUser,
            products: savedCart,
            shipment: shippingData,
            paymentId,
            orderTime: new Date()
        };

        fetch('https://intense-tor-05481.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    processOrder();
                    alert('Your order placed successfully')
                }
            })
    }


    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div className="row">
            <div style={{ display: shippingData ? 'none' : 'block' }} className="col-md-6">
                < form onSubmit={handleSubmit(onSubmit)} >

                    < input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Name" />
                    {errors.exampleRequired && <span>Name is required</span>}
                    <br />

                    < input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Email" />
                    {errors.exampleRequired && <span>Email is required</span>}
                    <br />

                    < input name="address" ref={register({ required: true })} placeholder="Address" />
                    {errors.exampleRequired && <span>Address is required</span>}
                    <br />

                    < input name="phone" ref={register({ required: true })} placeholder="Phone" />
                    {errors.exampleRequired && <span>Phone Number is required</span>}
                    <br />

                    <input type="submit" />
                </form >
            </div>

            <div style={{ display: shippingData ? 'block' : 'none' }} className="col-md-6">
                <h1>Pay for me</h1>
                <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
            </div>
        </div>
    );
}

export default Shipment;

import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';

const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        < form onSubmit={handleSubmit(onSubmit)} >

            < input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Name" />
            { errors.exampleRequired && <span>Name is required</span>}
            <br />

            < input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Email" />
            { errors.exampleRequired && <span>Email is required</span>}
            <br />

            < input name="address" ref={register({ required: true })} placeholder="Address" />
            { errors.exampleRequired && <span>Address is required</span>}
            <br />

            < input name="phone" ref={register({ required: true })} placeholder="Phone" />
            { errors.exampleRequired && <span>Phone Number is required</span>}
            <br />

            <input type="submit" />
        </form >
    );
}

export default Shipment;

import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitCardForm from './SplitCardForm';

const stripePromise = loadStripe('pk_test_51IeGnnGranyyLnAmLW22rf5qeFwcbqQi1Ky0k9GRwjvcTSEHuHfzew1LPWdXrzeDVTasOEOj9WUF1pzsYZZr5X2r00HZbjsjAB');

const processPayment = () => {
    return (
        <Elements stripe={stripePromise}>
                <SimpleCardForm></SimpleCardForm>
                {/* <SplitCardForm></SplitCardForm> */}
        </Elements>
    );
};

export default processPayment;

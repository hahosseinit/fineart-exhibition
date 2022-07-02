import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeChecoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = '';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Nilu Art Studio'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}. It's not complete. Please do not continue!`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeChecoutButton;
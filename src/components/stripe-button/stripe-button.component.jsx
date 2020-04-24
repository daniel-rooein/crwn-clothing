import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceInCents = price * 100;
    const publishableKey = 'pk_test_7kjD4bqNamSSzbB9scnOnEJR00dUdrEFER';

    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    }

    return(
        <StripeCheckout 
            currency = 'CAD'
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            shippingAddress
            imagae='https://svgshare.com/i/CUzz.svg'
            description={`Your tatal is $${price}`}
            amount={priceInCents}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;
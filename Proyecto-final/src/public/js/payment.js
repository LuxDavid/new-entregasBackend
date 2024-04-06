import Stripe from 'stripe';

const stripe = Stripe('pk_test_51OzABE07PUdS3FG1naRca5OXfAhPdUPUDEDg2Yw0R8dE4WIKnAQvGGUUXrjIHYCxNiXHrYvDW2RBOBHSyrLsi9N300IDKoMJiF');

const options = {
    mode: 'payment',
    amount: 1099,
    currency: 'usd',
    paymentMethodCreation: 'manual',
    // Fully customizable with appearance API.
    appearance: {/*...*/},
  };
  
  // Set up Stripe.js and Elements to use in checkout form
  const elements = stripe.elements(options);
  
  // Create and mount the Payment Element
  const paymentElement = elements.create('payment');
  paymentElement.mount('#payment-element');
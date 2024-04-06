import PaymentService from '../services/payment-services.js'

export const cartToPay= async (req, res) => {

const stripe = new PaymentService()

  try {
    const charge = {
      amount: 2000,
      currency: 'mxn',
      description: 'Descripción del producto o servicio',
      payment_method_types: ['card'],
    };

    console.log(charge);

    const result = await stripe.createPaymentIntent(charge);

    res.status(200).json(result)
  } catch (error) {
    console.error('Error al procesar el pago:', error);
    res.status(500).send('Error al procesar el pago');
  }

}


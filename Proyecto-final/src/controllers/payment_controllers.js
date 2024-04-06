import PaymentService from '../services/payment-services.js'

// const products = [
//     { id: 1, name: "papas", price: 1000 },
//     { id: 2, name: "queso", price: 500 },
//     { id: 3, name: "hamburguesa", price: 1500 },
//     { id: 4, name: "soda", price: 1000 },
//     { id: 5, name: "golosinas", price: 800 }
// ]

export const cartToPay= async (req, res) => {
    // const productId = req.query.id
    // if (!productId) return res.status(400).send('No product id')

    // const product = products.find(p => p.id == parseInt(productId))
    // if (!product) return res.status(400).send('Product not found')

    // const data = {
    //     amount: product.price,
    //     currency: 'usd',
    //     payment_method_types: ['card']
    // }

    
    // const result = await service.createPaymentIntent(data)

    // res.send({ status: 'success', payload: result })

    console.log('hola');

const stripe = new PaymentService()

  const token = req.body.stripeToken; // Token generado por Stripe Elements

  try {
    const charge = {
      amount: 1000,
      currency: 'usd',
      description: 'Descripción del producto o servicio',
      source: token,
    };

    console.log(charge);

    const result = await stripe.createPaymentIntent(charge);

    res.send('Pago exitoso');
  } catch (error) {
    console.error('Error al procesar el pago:', error);
    res.status(500).send('Error al procesar el pago');
  }

}


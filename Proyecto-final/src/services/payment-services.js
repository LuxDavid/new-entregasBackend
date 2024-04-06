import Stripe from 'stripe'
const key = 'sk_test_51OzABE07PUdS3FG1F5PKAFEOzqGDFZSuKMtxWyO43jTb36pwTtpp4KSlsZaKtOFcTlxskh7FspJiJlKJg0IIbX1u00PLOkbVKt'

export default class PaymentService {
    constructor() {
        this.stripe = new Stripe(key)
    }

    createPaymentIntent = async(data) => {
        const paymentIntent = this.stripe.paymentIntents.create(data)
        return paymentIntent
    }
}
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const router = express.Router();

// CHARGE CUSTOMER
router.post('/charge', async (req, res) => {
  const amount = 2500;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'eur'
    });
    res.send(paymentIntent);
  } catch (error) {
    res.send(error);
  }
});

module.export = router;

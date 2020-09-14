const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51HPvTbJqRTn8ArZfFNg0bqY1xEbh00ZNyJlyRDnROK12RaIy8Jh6ehInijguFWefEq9jfhhEz4xwi0qKv9MUfmWt00ZFbwpUT8')

const app = express()

app.use(cors({ origin: true }));
app.use(express.json())

app.get('/', (req,res) => {
    res.status(200).send('hello word')
})

app.post('/payments/create', async (req,res) => {
   
     
    const total = req.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    })
  

    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });
  

  exports.api = functions.https.onRequest(app);
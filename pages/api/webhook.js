import { mongooseConnect } from "@/lib/mongoose";
const stripe = require('stripe')(process.env.STRIPE_SK);
import {buffer} from 'micro';
import { Order } from "@/models/Order";

const endpointSecret = "whsec_156d349f2146cedf4ec31661b52b075c67b1b6382458398ca1c7f7a5089d677d";


export default async function handler(req,res) {
    await mongooseConnect(); 
    const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const data = event.data.object;
      const orderId = data.metadata.orderId; 
      const paid = data.payment_status === 'paid';
      if (orderId && paid) {
        await Order.findByIdAndUpdate(orderId, {
          paid:true,
        })
      }
      console.log(data)
    break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.status(200).send('ok');
}

export const config = {
    api: {bodyParser:false}
}


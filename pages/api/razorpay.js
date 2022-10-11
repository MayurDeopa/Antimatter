const Razorpay = require("razorpay");
const shortid = require("shortid");

import { __DEV_ } from "../../lib/drawer/dev";

export default async function handler(req, res) {
  console.log(process.env.RAZORPAY_SECRET )
  if (req.method === "POST") {
    // Initialize razorpay object
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET ,
    });

    // Create an order -> generate the OrderID -> Send it to the Front-end
    // Also, check the amount and currency on the backend (Security measure)
    const options = req.body

    try {
      const response = await razorpay.orders.create({
        amount: options.amount * 100,
        currency: "INR",
        receipt: shortid.generate(),
      });
      res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (err) {
      res.status(400).json(err);
    }
  } else {
    // Handle any other HTTP method
  }
}
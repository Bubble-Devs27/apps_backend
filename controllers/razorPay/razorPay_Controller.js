require('dotenv').config();
const Razorpay = require('razorpay');
const crypto = require('crypto');

const razorpay = new Razorpay({
  key_id: process.env.RZP_KEY_ID,        // from Razorpay dashboard (TEST)
  key_secret: process.env.RZP_KEY_SECRET // keep secret on server
});
const createRazorPayOrder = async (req ,res)=>{
  
 try {
    const { amount, currency = 'INR', receipt } = req.body;
    if (!amount) return res.status(400).json({ error: 'amount required' });

    const options = {
      amount: Math.round(amount * 100), // rupees -> paise
      currency,
      receipt: receipt || `rcpt_${Date.now()}`,
      payment_capture: 1
    };

    const order = await razorpay.orders.create(options);
    return res.json(order); // contains id = order_id
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'order creation failed' });
  }
}
const verifyRazorPayment =  async(req,res)=>{
 const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature)
    return res.status(400).json({ verified: false });

  const generated_signature = crypto
    .createHmac('sha256', process.env.RZP_KEY_SECRET)
    .update(razorpay_order_id + '|' + razorpay_payment_id)
    .digest('hex');

  if (generated_signature === razorpay_signature) {
    // signature valid -> payment is genuine (you can also check payment status via API)
    return res.status(200).json({ verified: true });
  } else {
    return res.status(400).json({ verified: false });
  }
}

module.exports = {createRazorPayOrder , verifyRazorPayment}
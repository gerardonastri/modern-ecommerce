import Stripe from 'stripe'

const stripe = new Stripe('sk_test_51Jr189CjKHGwSFYKv3nRoYTT2aC87JoXX7zPrb4TkPwG7VnQg9JblTbsYzgkZBnRdGr0QdeqO1nZm2ZZZknnafXG00mf20cu22')

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
          { shipping_rate: 'shr_1KtbZGCjKHGwSFYK16ZC7DKr' },
        ],
        line_items: req.body.cartItems.map((item) => {
         // const img = item.image[0].asset._ref;
         // const newImage = img.replace('image-', 'https://cdn.sanity.io/images/vfxfwnaw/production/').replace('-webp', '.webp');

          return {
            price_data: { 
              currency: 'usd',
              product_data: { 
                name: item.name,
                images: [item.image],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled:true,
              minimum: 1,
            },
            quantity: item.quantity
          }
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
      }

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);

      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
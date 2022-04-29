import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe(`pk_test_51Jr189CjKHGwSFYK2iW6HpuBeInhO8ROPCxFmHzPe14MvBl4hW6ZMnJtW4UtaPUUvSX1Hkur6zqRxPIX6Wj0Lun1001VQNYhFB`);
  }

  return stripePromise;
}

export default getStripe;
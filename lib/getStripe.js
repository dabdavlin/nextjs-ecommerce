import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
);

const getStripe = () => {
  if (!stripePromise) {
    stripePromise;
  }

  return stripePromise;
};

export default getStripe;

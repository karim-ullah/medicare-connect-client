import 'server-only'

import Stripe from 'stripe'

export function getStripe() {
  const apiKey = process.env.STRIPE_SECRET_KEY;

  if (!apiKey) {
    throw new Error("Stripe is not configured. Add STRIPE_SECRET_KEY before using checkout.");
  }

  return new Stripe(apiKey);
}

const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_test_2JcJpVQEDBKZzcQxjBvWZJrf'
    : 'sk_test_2JcJpVQEDBKZzcQxjBvWZJrf';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
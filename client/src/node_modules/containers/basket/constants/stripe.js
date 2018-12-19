const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_3AhdoUnrbJ6HVm0k5tMk6HQe';

export default STRIPE_PUBLISHABLE;
export const orderFactory = () => ({
  itemSku: 'SKU-123',
  qty: 2,
  coupon: 'SAVE10'
});

export const userFactory = () => ({
  email: `user.${Math.random().toString(36).slice(2)}@example.test`,
  password: 'Password123!'
});

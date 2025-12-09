import { z } from 'zod';

export const CreateOrderResponseSchema = z.object({
  orderId: z.string().min(1),
  status: z.enum(['confirmed', 'pending']),
  total: z.number().nonnegative()
});

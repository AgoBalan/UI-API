import { z } from 'zod';

export const LoginResponseSchema = z.object({
  token: z.string().min(10),
  userId: z.string().min(1)
});

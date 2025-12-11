import { z } from "zod";

export const LoginResponseSchema = z.object({
  code: z.number(),              // 0
  message: z.string(),           // "success"
  data: z.object({
    Id: z.number(),              // 17
    Name: z.string(),            // "ankishRR"
    Email: z.string().email()    // validate proper email format
  })
});
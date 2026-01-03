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


export const ProductViewResponseSchema = z.object({
  data: z.object({
    _id: z.string(),                        // "68a961459320a140fe1ca57a"
    productName: z.string(),                // "ZARA COAT 3"
    productCategory: z.string(),            // "electronics"
    productSubCategory: z.string(),         // "mobiles"
    productPrice: z.number(),               // 11500
    productDescription: z.string(),         // "Apple phone"
    productImage: z.string().url(),         // validate proper URL format
    productRating: z.string(),              // "0" (string, not number in response)
    productTotalOrders: z.string(),         // "0" (string, not number in response)
    productStatus: z.boolean(),             // true
    productFor: z.string(),                 // "women"
    productAddedBy: z.string(),             // "admin"
    __v: z.number()                         // 0
  }),
  message: z.string()                       // "Product Details fetched Successfully"
});
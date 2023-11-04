import { z } from 'zod';

const requiredField = 'This Field is Required';

export const insuranceProviderSchema = z.object({
  id: z.number().optional().nullable(),
  name: z.string().nonempty(requiredField),
  discount_type: z.string().nonempty(requiredField),
  discount_amount: z.number(),
});

export type TInsuranceProvider = z.infer<typeof insuranceProviderSchema>;

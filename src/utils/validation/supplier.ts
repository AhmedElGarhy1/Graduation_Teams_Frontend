import { z } from 'zod';

const requiredField = 'This Field is Required';

export const supplierSchema = z.object({
  id: z.number().optional().nullable(),
  name: z.string().nonempty(requiredField),
  created_at: z.string().optional(),
});

export type TSupplier = z.infer<typeof supplierSchema>;

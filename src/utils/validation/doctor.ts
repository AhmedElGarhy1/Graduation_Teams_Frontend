import { z } from 'zod';

const requiredField = 'This Field is Required';

export const doctorSchema = z.object({
  id: z.number().optional(),
  name: z.string().nonempty(requiredField),
  username: z.string().nonempty(requiredField),
  email: z.string().email().nonempty(requiredField),
});

export type TDoctor = z.infer<typeof doctorSchema>;

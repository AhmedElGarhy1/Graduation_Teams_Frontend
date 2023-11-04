import { z } from 'zod';

const requiredField = 'This Field is Required';

export const patientProfileSchema = z.object({
  id: z.number().optional().nullable(),
  name: z.string().nonempty(requiredField),
});

export type TPatientProfile = z.infer<typeof patientProfileSchema>;

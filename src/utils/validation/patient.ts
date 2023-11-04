import { z } from 'zod';
import { formatDateToString } from '..';

const requiredField = 'This Field is Required';

export const patientSchema = z.object({
  id: z.number().optional(),
  name: z.string().nonempty(requiredField),
  address: z.string().optional().nullable(),
  birthdate: z.date().optional().nullable(),
  phone: z
    .string()
    .min(11, 'Number Must be Greater that 11 Numbers')
    .max(11, 'Number Must be Less that 11 Numbers'),
  insurance_id: z.number().optional().nullable(),
  gender: z.string().optional().nullable(),
});

export type TPatient = z.infer<typeof patientSchema> & {
  visit_count: number;
  insurance_discount_amount: number;
  insurance_discount_type: string;
};

export const makePatientData = (data: TPatient) => {
  const birthdate = formatDateToString(data.birthdate);
  const phone = data.phone.toString();

  return {
    ...data,
    birthdate,
    phone,
  };
};

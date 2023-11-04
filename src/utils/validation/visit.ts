import { z } from 'zod';
import { formatDateToString } from '..';

const requiredField = 'This Field is Required';

export const visitSchema = z.object({
  id: z.number().optional(),
  patient_name: z.string().nonempty(requiredField),
  visit_type: z.string().nonempty(requiredField),
  patient_id: z.any(),
  notes: z.string().nullable().optional(),
  paid_amount: z.number().nullable(),
  price: z.number().optional(),
  moneyleft: z.number().optional(),
  date: z.date(),
  patient_phone: z
    .string()
    .min(11, 'Number Must be Greater that 11 Numbers')
    .max(11, 'Number Must be Less that 11 Numbers'),
  timereserved: z.string().nonempty(requiredField),
  completed_at: z.string().optional().nullable(),
});

export type TVisit = z.infer<typeof visitSchema>;

export const makeVisitData = (data: TVisit, isUpdate = false) => {
  // @ts-ignore
  data.date = formatDateToString(data.date);

  if (!isUpdate) {
    if (data.patient_id) {
      data.patient_name = null as any;
      data.patient_phone = null as any;
    }
  }

  return {
    ...data,
  };
};

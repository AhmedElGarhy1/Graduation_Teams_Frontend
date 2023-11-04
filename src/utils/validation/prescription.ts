import { z } from 'zod';
import { formatDateToString } from '..';

const requiredField = 'This Field is Required';

export const drugSchema = z.object({
  id: z.number().optional().nullable(),
  drug_name: z.string().nonempty(requiredField),
  dose: z.string().nonempty(requiredField),
  notes: z.string().nullable().optional(),
  type: z.string().nullable().optional(),
  addedNote: z.string().nullable().optional(),
  supplier_id: z.number(),
});

export type TDrug = z.infer<typeof drugSchema> & {
  supplier?: string;
};

export const prescriptionSchema = z.object({
  id: z.number().optional(),
  name: z.string().optional(),
  date: z.date(),
  patient_id: z.number(),
  visit_id: z.number(),
  prescription_lines: z.array(drugSchema),
  notes: z.string().nullable().optional(),
});
export type TPrescription = z.infer<typeof prescriptionSchema>;

export const makePrescriptionData = (
  data: TPrescription,
  isTemplate: boolean
) => {
  const date = formatDateToString(data.date);

  const prescription_lines = data.prescription_lines.map(
    ({ id, addedNote, ...rest }) => {
      if (addedNote) {
        rest.notes = addedNote;
      }

      return {
        ...rest,
      };
    }
  );

  if (isTemplate) {
    data.patient_id = null as any;
    data.visit_id = null as any;
  }

  return {
    ...data,
    date,
    prescription_lines,
    isTemplate,
  };
};

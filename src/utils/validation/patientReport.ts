import { z } from 'zod';
import { formatDateToString } from '..';

const requiredField = 'This Field is Required';

export const patientReportSchema = z.object({
  id: z.number().optional(),
  patient_id: z.number(),
  visit_id: z.number(),
  name: z.string().nonempty(requiredField),
  estimate_date: z.date(),
  comment: z.string().optional().nullable(),
});

export type TPatientReport = z.infer<typeof patientReportSchema> & {
  created_at: string;
  status: string;
  file: string;
};

export const makePatientReportData = (data: TPatientReport) => {
  const newData = {
    ...data,
    estimate_date: formatDateToString(data.estimate_date),
  };
  return newData;
};

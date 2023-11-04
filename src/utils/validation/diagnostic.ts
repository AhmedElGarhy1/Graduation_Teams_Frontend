import { z } from 'zod';

const requiredField = 'This Field is Required';

export const diagnosticCategorySchema = z.object({
  id: z.number().optional(),
  name: z.string().nonempty(requiredField),
  description: z.string().nonempty(requiredField),
  advices: z.string().optional().nullable(),
  parent_id: z.number().optional().nullable(),
  parent_name: z.string().optional().nullable(),
});

export type TDiagnosticCategory = z.infer<typeof diagnosticCategorySchema>;

export const diagnosticSchema = z.object({
  id: z.number().optional(),
  name: z.string().optional(),
  pateint_id: z.number(),
  visit_id: z.number(),
  notes: z.string().nullable().optional(),
  diagnostic_category_id: z.number().nullable().optional(),
});

export type TDiagnostic = z.infer<typeof diagnosticSchema>;

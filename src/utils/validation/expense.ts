import { z } from 'zod';
import { formatDateToString } from '..';

const requiredField = 'This Field is Required';

export const expenseSchema = z.object({
  id: z.number().optional(),
  name: z.string().nonempty(requiredField),
  expenses_value: z.number(),
  expenses_category_id: z.number(),
  date: z.date(),
  expenses_category_name: z.string().optional(),
});

export type TExpense = z.infer<typeof expenseSchema>;

export const expenseCategorySchema = z.object({
  id: z.number().optional(),
  name: z.string().nonempty(requiredField),
  icon: z.string().optional().nullable(),
});

export type TExpenseCategory = z.infer<typeof expenseCategorySchema>;

export const makeExpenseData = (data: TExpense) => {
  const date = formatDateToString(data.date);

  return {
    ...data,
    date,
  };
};

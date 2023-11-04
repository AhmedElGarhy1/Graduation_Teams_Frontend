import { z } from "zod";

const requriedField = "This Field is Required";
const required = {
  required_error: requriedField,
};
const requiredEmail = "Please provide a valid Email";

export const singupSchema = z.object({
  id: z.number().optional(),
  username: z.string(required).min(1),
  email: z.string().email(requiredEmail),
  firstName: z.string(required).min(1),
  lastName: z.string(required).min(1),
  age: z.number().min(18),
  phone: z.string(required).min(1),
  gender: z.string(required).min(1),
  password: z.string(required).min(1),
  confirmPassowrd: z.string(required).min(1),
  department: z.string(required),
});
export type TSignup = z.infer<typeof singupSchema>;

export const loginSchema = z.object({
  id: z.number().optional(),
  email: z.string().email(requiredEmail),
  password: z.string(required).min(1),
});

export type TLogin = z.infer<typeof loginSchema>;

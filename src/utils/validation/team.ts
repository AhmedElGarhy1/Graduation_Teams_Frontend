import { z } from "zod";

const requriedField = "This Field is Required";
const required = {
  required_error: requriedField,
};
export const teamSchema = z.object({
  id: z.number().optional(),
  department: z.string(required),
  name: z.string(required),
});
export type TTeam = z.infer<typeof teamSchema>;

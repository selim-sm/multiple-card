import { number, z } from "zod";

export const formSchema = z.object({
  number: z.number().multipleOf(3, { message: "mi" }),
});

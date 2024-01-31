import * as z from "zod";

export const UserValidation = z.object({
  profile_photo: z.string().url().min(1),
  name: z
    .string()
    .min(2, { message: "Minimum 2 characters." })
    .max(30, { message: "Maximum 30 caracters." }),
  username: z
    .string()
    .min(2, { message: "Minimum 2 characters." })
    .max(30, { message: "Maximum 30 caracters." }),
  bio: z
    .string()
    .min(1, { message: "Minimum 1 characters." })
    .max(1000, { message: "Maximum 1000 caracters." }),
});

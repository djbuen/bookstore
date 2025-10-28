import { z } from "zod";

// Schema for creating a book
export const createBookSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().nullable(),
  date_published: z.string().refine((val) => !isNaN(Date.parse(val)), "Invalid date"),
  author: z.string().min(1, "Author is required"),
  price: z.number().min(0, "Price must be greater than or equal to 0"),
  imageUrl: z.string().url().nullable(),
});

// Schema for updating a book (all fields optional)
export const updateBookSchema = z.object({
  title: z.string().min(1).optional(),
  content: z.string().nullable().optional(),
  date_published: z.string()
    .refine((val) => !isNaN(Date.parse(val)), "Invalid date")
    .optional(),
  author: z.string().min(1).optional(),
  price: z.number().min(0).optional(),
  imageUrl: z.string().url().nullable().optional(),
});
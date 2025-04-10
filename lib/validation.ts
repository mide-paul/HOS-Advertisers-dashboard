import { z } from "zod";

// Custom file schema
const fileSchema = z.custom<File[]>((value) => {
  if (!Array.isArray(value)) return false; // Ensure the value is an array
  return value.every((file) => file instanceof File); // Validate each item is a File instance
}, "Invalid file type");

export const adSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters"),
    description: z.string().max(200, "Description cannot exceed 200 characters"),
    adFile: fileSchema,
    numberOfAds: z.string(),
    banner: z.string(),
    dimensions: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    adSize: z.string(),
    price: z.string(),
  });
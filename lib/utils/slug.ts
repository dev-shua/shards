import slugify from "slugify";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("1234567890abcdefjhijklmnopqrstuvwxyz", 6);

export const generateTableSlug = (name: string): string => {
  const base = slugify(name, { lower: true, strict: true });
  return `${base}-${nanoid()}`;
};

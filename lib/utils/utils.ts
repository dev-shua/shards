import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitial(name?: string | null): string {
  return name?.charAt(0).toUpperCase() ?? "?";
}

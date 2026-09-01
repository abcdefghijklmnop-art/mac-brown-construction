import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function img(path: string): string {
  return `${BASE_PATH}${path}`;
}

export function api(path: string): string {
  return `${BASE_PATH}/api${path}`;
}

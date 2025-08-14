import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/the-library-dispensary' : '';
  return `${basePath}${path}`;
}
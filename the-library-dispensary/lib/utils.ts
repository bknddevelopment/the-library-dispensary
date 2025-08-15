import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(path: string): string {
  // No basePath needed for custom domain
  // Add cache-busting query parameter for logo to force refresh
  // Using fixed version to allow proper caching after initial refresh
  if (path.includes('the-library-logo.png')) {
    return `${path}?v=2`;
  }
  return path;
}
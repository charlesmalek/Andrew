import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Main utility function for class merging (used throughout the app)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Re-export utilities from our utils folder for convenience
export * from '@/utils'

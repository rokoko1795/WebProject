import { clsx, type ClassValue } from 'clsx'

/**
 * Utility for merging Tailwind classes
 * Simple version without tailwind-merge to avoid dependency issues
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

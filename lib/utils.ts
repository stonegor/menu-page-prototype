import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function withBasePath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/menu-page' : '';
  return `${basePath}${path}`;
}

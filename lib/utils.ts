// /lib/utils.ts

// export function cn(...classes: string[]) {
//     return classes.filter(Boolean).join(' ');
//   }

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
  
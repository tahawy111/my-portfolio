import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const moveItem = (array: any[], to: number, from: number) => {
  const item = array[from];
  array.splice(from, 1);
  array.splice(to, 0, item);
  return array;
};
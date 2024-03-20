import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// my-2 mx-2 -> m-2
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
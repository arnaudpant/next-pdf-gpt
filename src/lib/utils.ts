import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { auth } from "../../auth"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getAuthSession = async () => {
  const session = await auth()

  if(!session?.user){
    throw new Error('Session not found')
  }

  return session
}
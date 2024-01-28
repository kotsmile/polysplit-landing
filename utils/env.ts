import { z } from 'zod'

export const env = z
  .object({
    VITE_RPC_BACKEND_URL: z.string(),
  })
  .parse(import.meta.env)

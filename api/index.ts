import { createApiClient } from './client'

export const rpcClient = createApiClient(env.VITE_RPC_BACKEND_URL)

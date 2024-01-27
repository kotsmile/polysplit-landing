import { useQuery } from '@tanstack/vue-query'
import { createQueryKeys } from '@lukemorales/query-key-factory'

import { rpcClient } from '@/api'

const statsKeys = createQueryKeys('stats', {
  stats: null,
})

export const useGetStats = () => {
  return useQuery({
    ...statsKeys.stats,
    async queryFn() {
      try {
        const response = await rpcClient.GetV1Stats().then((data) => data.data)
        console.log({ response })
        return response
      } catch (error) {
        console.error(error)
      }
    },
  })
}

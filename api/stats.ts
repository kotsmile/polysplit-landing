import { useQuery } from '@tanstack/vue-query'
import { createQueryKeys } from '@lukemorales/query-key-factory'

import { rpcClient } from '@/api'

const statsKeys = createQueryKeys('stats', {
  all: null,
  chainId: (params: { chainId: MaybeRef<string> }) => [params],
})

export const useGetStatsAll = () => {
  return useQuery({
    ...statsKeys.all,
    async queryFn() {
      return await rpcClient.GetV1StatsAll().then((data) => data.data)
    },
  })
}

export const useGetStatsChain = (
  chainId: MaybeRef<string>,
  enabled: MaybeRef<boolean>,
) => {
  return useQuery({
    ...statsKeys.chainId({ chainId }),
    async queryFn({ queryKey }) {
      const params = queryKey[2]
      return await rpcClient
        .GetV1StatsChainId({ params: { chainId: params.chainId } })
        .then((data) => data.data)
    },
    enabled,
  })
}

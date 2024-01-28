<script lang="ts" setup>
import { FwbButton } from 'flowbite-vue'
import { useToggle } from '@vueuse/core'
import { useGetStatsChain } from '@/api/stats'

export interface StatsChainProps {
  chainId: string
}
const props = defineProps<StatsChainProps>()

// const [startLoading, load] = useToggle(false)
const statsChain = useGetStatsChain(props.chainId, true)
</script>
<template>
  <div class="border-[2px] border-primary p-4">
    <span class="font-bold text-xl">ChainId: {{ props.chainId }}</span>
    <div v-if="statsChain.data.value">
      <p>Unique users: {{ statsChain.data.value.uniqueUsers }}</p>
      <p>Most popular rpc: {{ statsChain.data.value.popularRpc }}</p>
      <div>
        <span class="font-bold"> For 24 hours: </span>
        <p>Ok requests: {{ statsChain.data.value.okCount24 }}</p>
        <p>Error requests: {{ statsChain.data.value.errorCount24 }}</p>
        <p>Total requests: {{ statsChain.data.value.totalCount24 }}</p>
        <p>
          Ok rate:
          {{
            (statsChain.data.value.okCount24 /
              statsChain.data.value.totalCount24) *
            100
          }}%
        </p>
        <p>
          Error rate:
          {{
            (statsChain.data.value.errorCount24 /
              statsChain.data.value.totalCount24) *
            100
          }}%
        </p>
        <p>
          Avg attempts to get rpc: {{ statsChain.data.value.avgAttempts24 }}
        </p>
      </div>
      <div>
        <span class="font-bold"> For all time: </span>

        <p>Ok requests: {{ statsChain.data.value.okCount }}</p>
        <p>Error requests: {{ statsChain.data.value.errorCount }}</p>
        <p>Total requests: {{ statsChain.data.value.totalCount }}</p>
        <p>
          Ok rate:
          {{
            (statsChain.data.value.okCount / statsChain.data.value.totalCount) *
            100
          }}%
        </p>
        <p>
          Error rate:
          {{
            (statsChain.data.value.errorCount /
              statsChain.data.value.totalCount) *
            100
          }}%
        </p>

        <span class="font-bold"> Top rpc: </span>

        <div>
          <p v-for="rpc of statsChain.data.value.topRpcs">- {{ rpc }}</p>
        </div>

        <div>
          <span class="font-bold"> Time response </span>

          <p>AVG: {{ statsChain.data.value.responseTimeMs.avg }}</p>
          <p>MIN: {{ statsChain.data.value.responseTimeMs.min }}</p>
          <p>MAX: {{ statsChain.data.value.responseTimeMs.max }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      loading...
      <!-- <div v-if="!statsChain.isPaused">  </div> -->
      <!-- <div v-else> <FwbButton @click="load()"> Load </FwbButton> -->
      <!-- </div> -->
    </div>
  </div>
</template>

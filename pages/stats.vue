<script lang="ts" setup>
import { useGetStats } from '@/api/stats'
const stats = useGetStats()
</script>

<template>
  <div>
    <div v-if="stats.data.value">
      Shared
      <p>Calls from website: {{ stats.data.value.shared.countFromLanding }}</p>
      <p>
        Calls from website (24 hour):
        {{ stats.data.value?.shared.countFromLanding24 }}
      </p>
      <div class="flex flex-col">
        <div
          v-for="[chainId, stat] of Object.entries(stats.data.value.perChainId)"
          class="border-[2px] border-primary p-4"
        >
          ChainId: {{ chainId }}

          <p>Unique users: {{ stat.uniqueUsers }}</p>
          <p>Most popular rpc: {{ stat.popularRpc }}</p>
          <div>
            For 24 hours:
            <p>Ok requests: {{ stat.okCount24 }}</p>
            <p>Error requests: {{ stat.errorCount24 }}</p>
            <p>Total requests: {{ stat.totalCount24 }}</p>
            <p>Ok rate: {{ (stat.okCount24 / stat.totalCount24) * 100 }}%</p>
            <p>
              Error rate: {{ (stat.errorCount24 / stat.totalCount24) * 100 }}%
            </p>
            <p>Avg attempts to get rpc: {{ stat.avgAttempts24 }}</p>
          </div>
          <div>
            For all time
            <p>Ok requests: {{ stat.okCount }}</p>
            <p>Error requests: {{ stat.errorCount }}</p>
            <p>Total requests: {{ stat.totalCount }}</p>
            <p>Ok rate: {{ (stat.okCount / stat.totalCount) * 100 }}%</p>
            <p>Error rate: {{ (stat.errorCount / stat.totalCount) * 100 }}%</p>

            Top rpc:
            <div>
              <p v-for="rpc of stat.topRpcs">
                {{ rpc }}
              </p>
            </div>

            <div>
              Time response
              <p>AVG: {{ stat.responseTimeMs.avg }}</p>
              <p>MIN: {{ stat.responseTimeMs.min }}</p>
              <p>MAX: {{ stat.responseTimeMs.max }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>loading...</div>
  </div>
</template>

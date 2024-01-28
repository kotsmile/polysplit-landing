<script lang="ts" setup>
import { useGetStatsAll } from '@/api/stats'
const statsAll = useGetStatsAll()
</script>
<template>
  <div>
    <div v-if="statsAll.data.value">
      Shared
      <p>Calls from website: {{ statsAll.data.value.countFromLanding }}</p>
      <p>
        Calls from website (24 hour):
        {{ statsAll.data.value.countFromLanding24 }}
      </p>
    </div>
    <div v-else>loading...</div>
  </div>
</template>

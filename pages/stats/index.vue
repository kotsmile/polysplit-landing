<script lang="ts" setup>
import { supportedChainIds } from '@/utils/chains'
</script>

<template>
  <div>
    <StatsAll />

    <div class="flex flex-col">
      <NuxtLink v-for="chainId of supportedChainIds" :key="chainId" :to="`/stats/${chainId}`">
        {{ chainId }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute('stats-chainId')
</script>

<template>
  <div>
    <NuxtLink to="/stats"> Back </NuxtLink>
    <StatsChain :chainId="route.params.chainId" />
  </div>
</template>

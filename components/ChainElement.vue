<script lang="ts" setup>
import axios from 'axios'
import { FwbButton, FwbBadge } from 'flowbite-vue'
export interface ChainElementProps {
  name: string
  id: string
  status: boolean
  logo: string
}

const props = defineProps<ChainElementProps>()

const url = computed(
  () =>
    'https://rpc.polysplit.cloud/v1/chain/' + unref(props.id) + '?site=hello',
  //() => 'http://localhost:3001/v1/chain/' + unref(props.id),
)
const time = ref('-')

onMounted(async () => {
  const eth_chainIdRequest = {
    method: 'eth_chainId',
    params: [],
    id: 1,
    jsonrpc: '2.0',
  }

  await axios.post(unref(url), eth_chainIdRequest)
  const now = Date.now()
  await axios.post(unref(url), eth_chainIdRequest)
  time.value = (Date.now() - now).toString()
})
</script>

<template>
  <li class="flex items-center text-[12px] sm:text-[15px]">
    <svg
      v-if="props.status"
      class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
      />
    </svg>

    <svg
      v-else
      class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
      />
    </svg>

    <img :src="props.logo" class="rounded-full mr-2 w-[15px] h-[15px]" />
    {{ props.name }} (id: {{ props.id }})
    <FwbBadge type="green" class="ml-2">{{ time }} ms</FwbBadge>
  </li>
</template>

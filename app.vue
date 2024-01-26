<script setup lang="ts">
import { initFlowbite } from 'flowbite'

import { useClipboard } from '@vueuse/core'
import {
  FwbP,
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbNavbarLogo,
  FwbHeading,
  FwbButton,
} from 'flowbite-vue'
import type { ChainElementProps } from '@/components/ChainElement.vue'

onMounted(() => {
  initFlowbite()
})

const chainList: ChainElementProps[] = [
  {
    status: true,
    name: 'Ethereum Mainnet',
    id: '1',
    logo: 'https://icons.llamao.fi/icons/chains/rsz_ethereum.jpg',
  },
  {
    status: true,
    name: 'BNB Smart Chain',
    id: '56',
    logo: 'https://icons.llamao.fi/icons/chains/rsz_binance.jpg',
  },
]
const chainId = ref(':id')
const url = computed(
  () => 'https://rpc.polysplit.cloud/v1/chain/' + unref(chainId),
)

const { copy } = useClipboard()
const onCopy = () => {
  copy(unref(url))
}
</script>

<template>
  <div>
    <FwbNavbar class="bg-gradient-to-r from-primary-0 to-secondary-0">
      <template #logo>
        <FwbNavbarLogo
          alt="Flowbite logo"
          image-url="/svgs/logo-inverse.svg"
          link="#"
        >
        </FwbNavbarLogo>
      </template>
    </FwbNavbar>
    <div class="bg-white">
      <div class="px-10 pt-10">
        <FwbP class="text-lg">
          Welcome to <span class="text-secondary">Polysplit</span>, where
          cutting-edge blockchain solutions meet unparalleled speed and
          reliability. Empower your projects with our fast and aggregated RPC
          node access services, revolutionizing the way you interact with
          blockchain networks.
        </FwbP>
      </div>
      <div class="p-10">
        <fwb-heading tag="h4" class="mb-2">How to use?</fwb-heading>
        <FwbP>Simple, just like your regular RPC provider</FwbP>

        <div
          class="flex relative justify-center my-2 items-center h-[70px] border-[2px] rounded-md bg-[#FFF]"
        >
          <FwbP class="font-mono text-[10px] sm:text-[20px]">
            {{ url }}
          </FwbP>
          <FwbButton
            color="alternative"
            class="absolute top-1/2 right-5 -translate-y-1/2"
            @click="onCopy"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
              />
            </svg>
          </FwbButton>
        </div>

        <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          Currently supported chains:
        </h2>
        <ul
          class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400"
        >
          <ChainElement
            v-for="chain of chainList"
            v-bind="chain"
            :key="chain.id"
          />
        </ul>
      </div>

      <div class="px-10">
        <div>
          <fwb-heading tag="h4" class="mb-2">Why Choose Us? </fwb-heading>
          <fwb-heading tag="h5" class="mb-1"
            >1. Lightning-Fast RPC Node Access:</fwb-heading
          >
          <FwbP>
            Experience a new era of speed with our high-performance RPC nodes.
            Accelerate your transactions and interactions with blockchain
            networks, ensuring swift and seamless operations for your
            decentralized applications.
          </FwbP>
          <fwb-heading tag="h5" class="mb-1">
            2. Aggregated Access for Optimal Performance:
          </fwb-heading>
          <FwbP>
            We understand the importance of reliability in the world of
            blockchain. Our aggregated access ensures that you have consistent
            and dependable connections, minimizing downtime and maximizing
            efficiency.
          </FwbP>
          <fwb-heading tag="h5" class="mb-1">
            3. Scalable Infrastructure:
          </fwb-heading>
          <FwbP>
            No matter the scale of your project, we've got you covered. Our
            scalable infrastructure adapts to your growing needs, providing a
            robust foundation for your blockchain endeavors.
          </FwbP>
          <fwb-heading tag="h5" class="mb-1">
            4. Secure and Reliable:
          </fwb-heading>
          <FwbP>
            Security is our top priority. Rest easy knowing that your
            transactions and interactions are protected by robust encryption and
            advanced security measures. Our reliable services ensure that you
            can trust us with your critical blockchain operations.
          </FwbP>
        </div>
      </div>
    </div>
  </div>
</template>

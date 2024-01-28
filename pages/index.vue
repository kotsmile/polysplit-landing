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

onMounted(() => {
  initFlowbite()
})
// 1,5,10,25,56,66,97,100,137,250,338,369,420,599,943,1001,1088,1101,4002,5000,8217,8453,10200,42161,43113,43114,59140,59144,80001,84531,421613

const defaultLogo = 'https://icons.llamao.fi/icons/chains/rsz_ethereum.jpg'

const chainId = ref(':id')
const url = computed(
  () => 'https://rpc.polysplit.cloud/v1/chain/' + unref(chainId),
)

const { copy } = useClipboard()
const onCopy = () => {
  copy(unref(url))
}

useSeoMeta({
  title: 'Polysplit',
  ogTitle: 'Polysplit',
  description: 'Polysplit blockchain RPC aggregator',
  ogDescription: 'Polysplit blockchain RPC aggregator',
  ogImage: 'https://polysplit.cloud/logo.png',
})
</script>

<template>
  <div>
    <div>
      <FwbP class="text-lg">
        Welcome to <span class="text-secondary">Polysplit</span>, where
        cutting-edge blockchain solutions meet unparalleled speed and
        reliability. Empower your projects with our fast and aggregated RPC node
        access services, revolutionizing the way you interact with blockchain
        networks.
      </FwbP>
    </div>

    <div>
      <fwb-heading tag="h4" class="my-2">Contact Us? </fwb-heading>
      <div>
        If you have any questions or requests just contact us via
        <a class="text-primary" href="mailto:polysplit@outlook.com">email</a>
      </div>

      <fwb-heading tag="h4" class="mb-2">Plans </fwb-heading>
      <FwbP>
        In our upcoming plans, we aim to launch a service that enhances the
        convenience of RPC (Remote Procedure Call) usage. This feature will
        empower you to curate a personalized list of your favorite RPCs,
        providing a seamless and tailored experience. Moreover, if any of your
        selected RPCs are unavailable, our system will intelligently substitute
        them with our own alternatives. Naturally, you will retain the
        flexibility to modify your RPC choices at any time, ensuring a dynamic
        and adaptable experience.
      </FwbP>
    </div>
    <div class="py-10">
      <fwb-heading tag="h4" class="mb-2">How to use?</fwb-heading>
      <FwbP>Simple, just like your regular RPC provider</FwbP>

      <div class="flex relative justify-center my-2 items-center h-[70px] border-[2px] rounded-md bg-[#FFF]">
        <FwbP class="font-mono text-[8px] sm:text-[18px] font-bold">
          {{ url }}
        </FwbP>
        <FwbButton color="alternative" class="absolute top-1/2 right-5 -translate-y-1/2" @click="onCopy">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-4 h-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
          </svg>
        </FwbButton>
      </div>

      <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Currently supported chains:
      </h2>
      <div>
        <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          Mainnets
        </h2>
        <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
          <ChainElement v-for="chain of chainList.filter((c) => c.type === 'mainnet')"
            v-bind="{ ...chain, image: chain.logo ?? defaultLogo }" :key="chain.id" />
        </ul>
      </div>
      <div>
        <h2 class="my-2 text-lg font-semibold text-gray-900 dark:text-white">
          Testnets
        </h2>
        <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
          <ChainElement v-for="chain of chainList.filter((c) => c.type === 'testnet')"
            v-bind="{ ...chain, image: chain.logo ?? defaultLogo }" :key="chain.id" />
        </ul>
      </div>
    </div>

    <div>
      <div>
        <fwb-heading tag="h4" class="mb-2">Why Choose Us? </fwb-heading>
        <fwb-heading tag="h5" class="mb-1">1. Lightning-Fast RPC Node Access:</fwb-heading>
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
          blockchain. Our aggregated access ensures that you have consistent and
          dependable connections, minimizing downtime and maximizing efficiency.
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
          Security is our top priority. Rest easy knowing that your transactions
          and interactions are protected by robust encryption and advanced
          security measures. Our reliable services ensure that you can trust us
          with your critical blockchain operations.
        </FwbP>
      </div>
    </div>
  </div>
</template>

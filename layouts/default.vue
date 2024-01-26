<script lang="ts" setup>
import {
  FwbP,
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbNavbarLogo,
  FwbHeading,
  FwbButton,
} from 'flowbite-vue'
</script>

<template>
  <FwbNavbar class="bg-gradient-to-r from-primary-0 to-secondary-0">
    <template #logo>
      <FwbNavbarLogo alt="Flowbite logo" image-url="/svgs/logo-inverse.svg" link="#">
      </FwbNavbarLogo>
    </template>
    <template #default="{ isShowMenu }">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <NuxtLink to="/" class="font-bold text-white"> Home </NuxtLink>
        <NuxtLink to="/privacy" class="font-bold text-white">
          Privacy Policy
        </NuxtLink>
      </fwb-navbar-collapse>
    </template>
  </FwbNavbar>
  <div class="bg-white p-10 lg:px-[450px]">
    <slot />
  </div>
</template>

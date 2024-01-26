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
      <FwbNavbarLogo
        alt="Flowbite logo"
        image-url="/svgs/logo-inverse.svg"
        link="#"
      >
      </FwbNavbarLogo>
    </template>
    <template #default="{ isShowMenu }">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link link="/" class="font-bold text-secondary">
          Home
        </fwb-navbar-link>
        <fwb-navbar-link link="/privacy" class="font-bold text-secondary"
          >Privacy Policy
        </fwb-navbar-link>
      </fwb-navbar-collapse>
    </template>
  </FwbNavbar>
  <div class="bg-white">
    <slot />
  </div>
</template>

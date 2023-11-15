<script setup>
import {store} from "@scripts/store";
</script>

<template>
  <div
      v-cloak
      class="transform bg-black fixed h-screen left-0 right-0 w-full z-30 top-0 bottom-0 overflow-x-auto transition-all ease-in-out duration-300"
      :class="store.navigationOpen ? 'translate-y-0' : '-translate-y-full'">
    <slot />
  </div>
</template>
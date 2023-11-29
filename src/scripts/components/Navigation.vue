<script setup>
import { store } from "@scripts/store"
</script>

<template>
  <div
    v-cloak
    class="fixed bottom-0 left-0 right-0 top-0 z-50 h-screen w-full transform overflow-x-auto bg-black transition-all duration-300 ease-in-out"
    :class="store.navigationOpen ? 'translate-y-0' : '-translate-y-full'"
  >
    <slot />
  </div>
</template>

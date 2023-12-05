<script setup>
import { store } from "@scripts/store"
</script>

<template>
  <button
    @click="store.toggleNavigation()"
    class="fixed z-[60] my-4 ml-auto flex h-[56px] w-[56px] items-center justify-center rounded-full bg-yellow text-black hover:bg-black hover:text-yellow sm:my-8 sm:h-[80px] sm:w-[80px] lg:my-12"
  >
    <span class="sr-only">Toggle navigation</span>
    <span v-if="!store.navigationOpen">
      <svg
        viewBox="0 0 46 25"
        class="h-5 w-auto fill-current sm:h-[25px] sm:w-[46px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M.656 10.781h44.688v3.438H.656V10.78ZM.656.47h44.688v3.437H.656V.47Zm0 20.625h44.688v3.437H.656v-3.437Z"
          fill-rule="nonzero"
        />
      </svg>
    </span>

    <span v-else>
      <svg
        viewBox="0 0 44 44"
        class="h-5 w-[44px] w-auto fill-current sm:h-[44px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43.386 2.761 41.238.613 22 19.851 2.761.613.613 2.761l19.238 19.24L.613 41.237l2.148 2.148 19.24-19.238 19.237 19.238 2.148-2.148L24.148 22z"
          fill-rule="nonzero"
        />
      </svg>
    </span>
  </button>
</template>

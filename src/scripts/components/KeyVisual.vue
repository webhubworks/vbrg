<script setup>
import { Vue3Lottie } from "vue3-lottie"

const props = defineProps({
  lottieJson: {
    type: String,
  },
  size: {
    type: String,
    default: "md",
    validator: (value) => ["md", "lg"].includes(value),
  },
})
</script>

<template>
  <div class="relative flex justify-center">
    <div
      class="relative z-10 aspect-[1024/780] w-full"
      :class="size === 'md' ? 'max-w-[512px]' : 'max-w-[1024px]'"
    >
      <Vue3Lottie :animationLink="lottieJson" />
    </div>
    <slot />
  </div>
</template>

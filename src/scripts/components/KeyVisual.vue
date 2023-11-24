<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['md', 'lg'].includes(value),
  },
})
</script>

<template>
  <div class="relative flex justify-center">
    <div class="bg-black" :class="size === 'md' ? 'h-[400px] w-[300px]' : 'h-[700px] w-[500px]'">

    </div>
    <slot />
  </div>
</template>
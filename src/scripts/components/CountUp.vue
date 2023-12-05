<script setup>
import { CountUp } from "countup.js"
import { onMounted, ref } from "vue"

const props = defineProps({
  number: Number,
  suffix: {
    type: String,
    required: false,
  },
  label: {
    type: String,
    required: false,
  },
})

const decimalPlaces = props.number.toString().split(".")[1]?.length || 0
const wrapper = ref(null)
const counter = ref(null)

onMounted(() => {
  const countUp = new CountUp(counter.value, props.number, {
    duration: 1,
    separator: ".",
    decimal: ".",
    useEasing: true,
    useGrouping: true,
    decimalPlaces,
  })

  const observer = new IntersectionObserver(
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        countUp.start()
        observer.disconnect()
      }
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }
  )
  observer.observe(wrapper.value)
})
</script>

<template>
  <div
    class="flex flex-col items-center justify-center gap-y-8 pt-6 sm:pt-8 md:pt-11 xl:gap-y-16 xl:pt-16"
  >
    <div
      class="whitespace-nowrap text-center text-lg font-black text-black md:text-2xl lg:text-3xl xl:text-[111px]"
      ref="wrapper"
    >
      <span class="number" ref="counter">{{ number }}</span>
      <span v-if="suffix" class="inline-block" v-html="suffix"></span>
    </div>
    <p
      class="text-center text-base font-black text-pink sm:text-lg lg:text-xl xl:text-2xl"
      v-if="label"
      v-html="label"
    ></p>
  </div>
</template>

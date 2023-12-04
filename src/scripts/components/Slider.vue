<script setup>
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/vue"
import { defineComponent } from "vue"

import "swiper/css"

const props = defineProps({
  nextId: String,
  prevId: String,
  length: Number,
})

defineComponent({
  Swiper,
  SwiperSlide,
})

const modules = [Navigation]
</script>

<template>
  <div class="flex items-center justify-center space-x-8" :id="props.id">
    <button
      v-if="props.length > 1"
      :id="props.prevId"
      class="gallery-prev cursor:pointer flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-transparent text-yellow hover:bg-black hover:text-yellow lg:h-[80px] lg:w-[80px]"
      aria-label="Previous"
    >
      <svg
        viewBox="0 0 52 45"
        class="h-10 fill-current lg:h-auto lg:w-[40px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M51.062 20.781H7.02L24.744 3.056 22.381.693.574 22.5l21.807 21.806 2.363-2.363L7.02 24.218h44.043z"
          fill-rule="nonzero"
        />
      </svg>
      <span class="sr-only">Previous</span>
    </button>
    <swiper
      :slides-per-view="1"
      class="mt-12"
      :modules="modules"
      :loop="true"
      :watch-overflow="true"
      :navigation="{
        nextEl: '#' + props.nextId,
        prevEl: '#' + props.prevId,
        disabledClass: 'opacity-30',
      }"
      slides-per-view="auto"
      :space-between="30"
      :centered-slides="true"
    >
      <slot></slot>
    </swiper>

    <button
      v-if="props.length > 1"
      :id="props.nextId"
      class="gallery-next cursor:pointer flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-transparent text-yellow hover:bg-black hover:text-yellow lg:h-[80px] lg:w-[80px]"
      aria-label="Next"
    >
      <svg
        viewBox="0 0 52 45"
        class="h-10 fill-current lg:h-auto lg:w-[40px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m29.62.693-2.364 2.363L44.98 20.781H.938v3.437H44.98L27.256 41.943l2.363 2.363L51.425 22.5z"
          fill-rule="nonzero"
        />
      </svg>
      <span class="sr-only">Next</span>
    </button>
  </div>
</template>

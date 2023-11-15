<script setup>
import {defineComponent, defineProps, ref} from 'vue';
import {Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/vue';

import 'swiper/css';

defineComponent({
  Swiper,
  SwiperSlide,
});

defineProps({
  items: {
    type: Array,
  },
});

const modules = [Navigation];


</script>

<template>
  <div class="flex">

    <button
        class="gallery-prev bg-transparent text-yellow hover:bg-black hover:text-yellow h-16 w-16 lg:h-[80px] lg:w-[80px] flex items-center justify-center"
        aria-controls="gallery"
        aria-label="Vorheriges Element"
    >
      <svg viewBox="0 0 52 45" class="h-10 lg:w-[40px] lg:h-auto fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M51.062 20.781H7.02L24.744 3.056 22.381.693.574 22.5l21.807 21.806 2.363-2.363L7.02 24.218h44.043z"
              fill-rule="nonzero"/>
      </svg>
    </button>

    <swiper
        :slides-per-view="1"
        class="mt-12"
        :modules="modules"
        :loop="true"
        :navigation="{
        nextEl: '.gallery-next',
        prevEl: '.gallery-prev',
        disabledClass: 'opacity-30',
      }"
        slides-per-view="auto"
        :space-between="30"
        :centered-slides="true"
    >
      <swiper-slide
          v-for="item in items"
          :key="item.id">
        <div class="px-6 lg:px-16 xl:px-32 mx-auto">

          <h2 v-html="item.title" class="text-white"></h2>
          <div v-html="item.text" class="typo typo--on-pink"></div>
        </div>
      </swiper-slide>
    </swiper>
    <button
        class="gallery-next bg-transparent text-yellow hover:bg-black hover:text-yellow h-16 w-16 lg:h-[80px] lg:w-[80px] flex items-center justify-center"
        aria-controls="gallery"
        aria-label="Nächstes Element"
    >
      <svg viewBox="0 0 52 45" class="h-10 lg:w-[40px] lg:h-auto fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="m29.62.693-2.364 2.363L44.98 20.781H.938v3.437H44.98L27.256 41.943l2.363 2.363L51.425 22.5z"
              fill-rule="nonzero"/>
      </svg>
    </button>
  </div>
</template>

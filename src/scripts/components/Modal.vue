<script setup>
import {ref, onMounted, onUnmounted, nextTick} from "vue";

const closeButton = ref(null);
const isModalOpen = ref(false);

defineProps({
  buttonClasses: {
    type: String,
    default: 'button',
  }
});

const openModal = () => {
  isModalOpen.value = true;
  document.body.classList.add('overflow-hidden');

  nextTick(() => {
    closeButton.value.focus();
  });

};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.classList.remove('overflow-hidden');
};

const handleEscKey = (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleEscKey);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscKey);
});

</script>

<template>
  <button :class="$props.buttonClasses" @click="openModal">
    <slot name="button"></slot>
  </button>
  <teleport to="body">
    <transition name="fade">
      <div class="modal" v-if="isModalOpen">
        <div class="max-w-7xl relative">
          <button @click="closeModal"
                  ref="closeButton"
                  autofocus
                  class="absolute top-0 right-0 ml-auto w-[80px] h-[80px] flex justify-center items-center z-50 bg-yellow text-black hover:bg-black hover:text-yellow transform translate-x-1/2 -translate-y-1/2 rounded-full focus:outline-none focus:ring-2 focus:ring-black">
            <svg viewBox="0 0 44 44" class="h-[44px] w-[44px] fill-current" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M43.386 2.761 41.238.613 22 19.851 2.761.613.613 2.761l19.238 19.24L.613 41.237l2.148 2.148 19.24-19.238 19.237 19.238 2.148-2.148L24.148 22z"
                  fill-rule="nonzero"/>
            </svg>
          </button>
          <div class="relative text-white ">
            <slot name="bg"></slot>
            <div class="relative p-16 lg:p-24">
              <div class="overflow-y-scroll h-full max-h-[70vh] ">
                <div class="typo typo--on-white ">
                  <slot></slot>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
/* Stile für das Modal */
.modal {
  @apply flex fixed w-full h-full z-[1000] justify-center items-center bg-black bg-opacity-40 inset-0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
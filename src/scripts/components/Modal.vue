<script setup>
import { nextTick, onMounted, onUnmounted, ref } from "vue"

const closeButton = ref(null)
const isModalOpen = ref(false)

defineProps({
  buttonClasses: {
    type: String,
    default: "button",
  },
})

const openModal = () => {
  isModalOpen.value = true
  document.body.classList.add("overflow-hidden")

  nextTick(() => {
    closeButton.value.focus()
  })
}

const closeModal = () => {
  isModalOpen.value = false
  document.body.classList.remove("overflow-hidden")
}

const handleEscKey = (event) => {
  if (event.key === "Escape") {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleEscKey)
})

onUnmounted(() => {
  window.removeEventListener("keydown", handleEscKey)
})
</script>

<template>
  <button :class="$props.buttonClasses" @click="openModal">
    <slot name="button"></slot>
    <span class="sr-only">Open modal</span>
  </button>
  <teleport to="body">
    <transition name="fade">
      <div class="modal" v-if="isModalOpen">
        <div class="relative m-8 max-w-7xl sm:m-0">
          <button
            @click="closeModal"
            ref="closeButton"
            autofocus
            class="absolute right-0 top-0 z-50 ml-auto flex h-[56px] w-[56px] -translate-y-1/2 translate-x-1/2 transform items-center justify-center rounded-full bg-yellow text-black hover:bg-black hover:text-yellow focus:outline-none focus:ring-2 focus:ring-black sm:h-[80px] sm:w-[80px]"
          >
            <svg
              viewBox="0 0 44 44"
              class="h-5 w-auto fill-current sm:h-[44px] sm:w-[44px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.386 2.761 41.238.613 22 19.851 2.761.613.613 2.761l19.238 19.24L.613 41.237l2.148 2.148 19.24-19.238 19.237 19.238 2.148-2.148L24.148 22z"
                fill-rule="nonzero"
              />
            </svg>
            <span class="sr-only">Close Modal</span>
          </button>
          <div class="relative text-white">
            <slot name="bg"></slot>
            <div class="relative p-8 sm:p-16 lg:p-24">
              <div class="h-full max-h-[70vh] overflow-y-scroll">
                <div class="typo typo--on-white">
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
  @apply fixed inset-0 z-[1000] flex h-full w-full items-center justify-center bg-black bg-opacity-40;
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

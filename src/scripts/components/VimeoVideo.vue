<template>
  <div
    class="embedded relative z-20 aspect-video"
    :class="
      consentGiven
        ? 'block bg-opacity-100'
        : 'hc:bg-opacity-100 flex items-center justify-center bg-opacity-75'
    "
  >
    <transition name="simple-fade">
      <div class="aspect-video" :class="consentGiven ? 'hidden' : 'block'">
        <div
          class="absolute bottom-0 left-0 right-0 top-0 flex flex-col flex-wrap items-start justify-between bg-black"
        >
          <div class="m-4 text-yellow lg:m-12">
            <svg
              fill="#000000"
              class="hidden h-12 w-12 fill-current sm:block lg:h-[120px] lg:w-[120px]"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 60 60"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30
		c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15
		C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z"
                />
                <path
                  d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
		S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"
                />
              </g>
            </svg>
          </div>

          <div v-if="!consentGiven" class="">
            <div
              class="relative m-4 flex items-start justify-start space-x-4 lg:m-12 lg:space-x-8"
            >
              <div
                class="group relative mt-1 inline-block w-8 select-none align-middle transition duration-200 ease-in lg:w-10"
              >
                <div class="relative">
                  <input
                    type="checkbox"
                    name="embeddedVimeo"
                    :id="'embeddedVimeo' + id"
                    v-model="consentGiven"
                    :checked="consentGiven"
                    class="peer relative mt-1 h-4 w-4 flex-shrink-0 cursor-pointer appearance-none rounded border-2 border-white bg-white checked:border-0 checked:bg-yellow hover:bg-yellow focus:border-0 focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2 lg:h-8 lg:w-8 lg:rounded-lg"
                  />
                  <svg
                    class="pointer-events-none absolute left-1 top-1 mt-1 hidden h-6 w-6 cursor-pointer stroke-current text-black peer-checked:block peer-hover:block peer-hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              </div>

              <label
                :for="'embeddedVimeo' + id"
                class="text-base text-white md:text-lg md:font-bold lg:text-xl"
                v-html="consent"
              ></label>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <transition name="simple-fade">
      <div class="aspect-video w-full" v-if="consentGiven">
        <iframe
          class="aspect-video h-full w-full"
          width="560"
          height="315"
          :src="consentGiven ? iframeSrc : null"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          v-if="consentGiven"
        ></iframe>
      </div>
    </transition>

    <div
      v-if="consentGiven"
      class="text-lightblue-200 with-link mt-4 text-lg"
      :class="consentGiven ? 'inline-flex w-full items-center' : 'hidden'"
      v-html="accepted"
    ></div>
  </div>
</template>

<script>
export default {
  name: "VimeoVideo",
  props: {
    id: {
      type: Number,
    },
    consent: {
      type: String,
    },
    accepted: {
      type: String,
    },
    src: {
      type: String,
    },
  },
  data: function () {
    return {
      consentGiven: this.checkConsent(),
      iframeSrc: this.src,
    }
  },
  mounted() {
    if (localStorage.getItem("vimeo-consent") === "true") {
      this.consentGiven = true
    }
  },
  methods: {
    checkConsent: function () {
      const stored = localStorage.getItem("vimeo-consent")
      if (stored === null || stored === "false") {
        return false
      } else {
        return stored === true
      }
    },
  },
  watch: {
    consentGiven: function () {
      localStorage.setItem("vimeo-consent", this.consentGiven)
    },
  },
}
</script>

<style scoped>
.simple-fade-enter-active,
.simple-fade-leave-active {
  transition: opacity 0.5s ease;
}

.simple-fade-enter-from,
.simple-fade-leave-to {
  opacity: 0;
}
</style>

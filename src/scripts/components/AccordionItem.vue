<template>
  <div>
    <details :open="opened">
      <summary
        class="items-top flex flex-shrink-0 justify-between space-x-2 hover:cursor-pointer"
        @click="toggleSVG"
      >
        <span>
          <span :class="summaryClasses">{{ title }}</span>
          <span :class="sublineClasses">{{ subline }}</span>
        </span>

        <svg
          viewBox="0 0 42 43"
          xmlns="http://www.w3.org/2000/svg"
          :class="iconClasses"
        >
          <path
            :d="
              showDetails
                ? 'M35.813 35.813C31.686 39.937 26.75 42 21 42s-10.688-2.063-14.813-6.188C2.063 31.689 0 26.75 0 21S2.063 10.312 6.188 6.187 15.25 0 21 0s10.688 2.063 14.813 6.188C39.937 10.313 42 15.25 42 21s-2.063 10.688-6.188 14.813ZM33.75 8.25C30.25 4.75 26 3 21 3S11.75 4.75 8.25 8.25 3 16 3 21s1.75 9.25 5.25 12.75S16 39 21 39s9.25-1.75 12.75-5.25S39 26 39 21s-1.75-9.25-5.25-12.75ZM7.5 19.5h27v3h-27v-3Z'
                : 'M35.813 7.135C31.686 3.01 26.75.948 21 .948S10.312 3.01 6.187 7.135 0 16.198 0 21.948 2.063 32.635 6.188 36.76 15.25 42.948 21 42.948s10.688-2.063 14.813-6.188C39.937 32.635 42 27.698 42 21.948S39.937 11.26 35.812 7.135ZM33.75 34.698c-3.5 3.5-7.75 5.25-12.75 5.25s-9.25-1.75-12.75-5.25S3 26.948 3 21.948s1.75-9.25 5.25-12.75S16 3.948 21 3.948s9.25 1.75 12.75 5.25S39 16.948 39 21.948s-1.75 9.25-5.25 12.75ZM22.5 20.448v-12h-3v12h-12v3h12v12h3v-12h12v-3h-12Z'
            "
            fill-rule="nonzero"
          />
        </svg>
      </summary>

      <slot :class="slotClasses" />
    </details>
  </div>
</template>

<script>
export default {
  name: "accordion-item",
  props: {
    title: {
      type: String,
      required: true,
    },
    subline: {
      type: String,
      required: true,
    },
    sublineClasses: {
      type: String,
      default: "text-black block font-bold text-lg lg:text-xl",
      required: false,
    },
    iconClasses: {
      type: String,
      default:
        "h-8 w-8 fill-current text-pink lg:mt-4 lg:h-[42px] lg:w-[42px] flex-shrink-0",
      required: false,
    },
    summaryClasses: {
      type: String,
      default: "text-pink text-xl lg:text-[40px] leading-none font-bold",
      required: false,
    },
    slotClasses: {
      type: String,
      required: false,
    },
    opened: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      showDetails: false,
    }
  },
  methods: {
    toggleSVG() {
      this.showDetails = !this.showDetails
    },
  },
}
</script>

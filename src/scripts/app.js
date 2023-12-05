import AccordionItem from "@components/AccordionItem.vue"
import CountUp from "@components/CountUp.vue"
import KeyVisual from "@components/KeyVisual.vue"
import Modal from "@components/Modal.vue"
import Navigation from "@components/Navigation.vue"
import NavigationButton from "@components/NavigationButton.vue"
import Slider from "@components/Slider.vue"
import VimeoVideo from "@components/VimeoVideo.vue"
import { SwiperSlide } from "swiper/vue"
import { createApp } from "vue"

import "@styles/app.pcss"

const app = createApp({
  components: {
    Navigation,
    NavigationButton,
    AccordionItem,
    Slider,
    SwiperSlide,
    KeyVisual,
    CountUp,
    Modal,
    VimeoVideo,
  },
})

app.mount("#app")

document.addEventListener("DOMContentLoaded", function () {
  // Find the div with the class "twingle-wrapper"
  var twingleWrapper = document.querySelector(".twingle-wrapper")

  // Check if the div is found
  if (twingleWrapper) {
    // Find the iframe element inside the div
    var iframeElement = twingleWrapper.querySelector("iframe")

    // Check if the iframe element is found
    if (iframeElement) {
      // Add a title attribute with "lorem ipsum" to the iframe
      iframeElement.title = "Twingle iFrame"
    } else {
      console.error("No iframe element found inside .twingle-wrapper")
    }
  } else {
    console.error("No element with the class .twingle-wrapper found")
  }
})

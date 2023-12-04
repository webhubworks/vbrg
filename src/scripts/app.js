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

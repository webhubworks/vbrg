import { createApp } from 'vue';
import AccordionItem from "@components/AccordionItem.vue";
import Navigation from "@components/Navigation.vue";
import NavigationButton from "@components/NavigationButton.vue";
import Slider from "@components/Slider.vue";

import '@styles/app.pcss';

const app = createApp({
    components: {
        Navigation,
        NavigationButton,
        AccordionItem,
        Slider,
    },
});

app.mount('#app');

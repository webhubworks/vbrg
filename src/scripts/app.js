import { createApp } from 'vue';
import ExampleComponent from '@components/ExampleComponent.vue';

import '@styles/app.pcss';

const app = createApp({
    components: {
        ExampleComponent
    },
});

app.mount('#app');

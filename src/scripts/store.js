import {reactive, watch} from "vue";
export const store = reactive({
    navigationOpen: false,
    toggleNavigation: () => store.navigationOpen = !store.navigationOpen,
});

export const onKeyEscape = (event) => {
    if (event.key === 'Escape') store.navigationOpen = false;
};

watch(() => store.navigationOpen, (value) => {
    if (value) {
        window.addEventListener('keydown', onKeyEscape);
        document.body.classList.add('overflow-hidden');
    } else {
        window.removeEventListener('keydown', onKeyEscape);
        document.body.classList.remove('overflow-hidden');
    }
}, {immediate: true});
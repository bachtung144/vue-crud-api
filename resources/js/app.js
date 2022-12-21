import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler';
import {router} from "./routes";
import { TailwindPagination } from 'laravel-vue-pagination';
import App from './layouts/App.vue'
import VueSweetalert2 from 'vue-sweetalert2';

const app = createApp(App)

app.use(router)
app.use(VueSweetalert2);

app.component('Pagination', TailwindPagination)

app.mount('#app')

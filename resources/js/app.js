import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler';
import {router} from "./routes";
import { TailwindPagination } from 'laravel-vue-pagination';
import VueSweetalert2 from 'vue-sweetalert2';

const app = createApp({})

app.use(router)
app.use(VueSweetalert2);

app.component('Pagination', TailwindPagination)

app.mount('#app')

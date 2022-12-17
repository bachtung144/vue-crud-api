import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler';
import {router} from "./routes";
import { TailwindPagination } from 'laravel-vue-pagination';
import App from './layouts/App.vue'

const app = createApp(App)

app.use(router)

app.component('Pagination', TailwindPagination)

app.mount('#app')

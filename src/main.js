import $ from 'jquery';
import { createApp } from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle';

const app = createApp(App);
app.config.globalProperties.$ = $;
app.mount('#app');
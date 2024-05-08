import "./index.css";
// Animate css
import 'animate.css';

import 'aos/dist/aos.css'; // You can also use <link> for styles

//sweetalert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import { createApp } from "vue";
import { createPinia } from "pinia";
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from "./App.vue";
import router from "./router";

const vuetify = createVuetify({
    components,directives
})
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify)
app.use(VueSweetalert2)
app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";

import header from "./components/header.vue";
import footer from "./components/footer.vue";
const app = createApp(App);
app.component("app-header", header);
app.component("app-footer", footer);

app.mount("#app");

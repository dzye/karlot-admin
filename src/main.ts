import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Layout, Menu, Button, Form, Input, message } from 'ant-design-vue';
const app = createApp(App);
app.provide('$message', message);
app.use(Layout);
app.use(Menu);
app.use(Button);
app.use(Form);
app.use(Input);
app
  .use(store)
  .use(router)
  .mount('#app');

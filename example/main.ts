import { createApp } from 'vue';
import App from './app.vue';
import '@ovo-ui/theme-chalk/src/index.scss';
import OvoUi from '@ovo-ui/components';

const app = createApp(App);
app.use(OvoUi);
app.mount('#app');

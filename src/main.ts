import { createApp } from 'vue';
import router from '@/router';
import { i18n } from '@/lang/i18n';

import App from './App.vue';

const app = createApp(App);

app.use(router);
app.use(i18n);

router.isReady().then(() => {
  app.mount('#app');
});

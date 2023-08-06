import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import featurePlugin from './plugins/feature-plugin';
import { myparcelNlFeatures } from './utils/features/myparcelnl';
import { sendmyparcelBeFeatures } from './utils/features/sendmyparcelbe';
import { version } from '../package.json';

createApp(App)
  .use(featurePlugin, {
    visible: true,
    prefix: 'features',
    platform: 'myparcelnl',
    version,
    locale: 'NL',
    accountFeatures: {
      myparcelnl: myparcelNlFeatures,
      myparcelbe: sendmyparcelBeFeatures,
    },
  })
  .mount('#app');

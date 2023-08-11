import { createApp } from 'vue';
import FeaturePlugin from './components/FeaturePlugin.vue';
import { Features } from './main';

type FeaturePluginOptions = {
  accountFeatures: Features;
  flag: string;
  locale: string;
  platform: string;
  prefix: string;
  version: string;
  visible?: boolean;
};

const featurePlugin = {
  install: (_, options: FeaturePluginOptions) => {
    const { visible = false } = options;

    if (!visible) {
      console.warn('Feature plugin is disabled');
      return;
    }

    if (window.localStorage.getItem(options.flag) !== 'true') {
      return;
    }

    const featurePluginElement = document.createElement('div') as HTMLElement;
    featurePluginElement.setAttribute('id', 'feature-plugin');
    featurePluginElement.setAttribute('class', 'flex z-50');

    document.body.appendChild(featurePluginElement);

    createApp(FeaturePlugin, {
      accountFeatures: options.accountFeatures,
      locale: options.locale,
      platform: options.platform,
      prefix: options.prefix,
      version: options.version,
      visible: options.visible,
    }).mount(featurePluginElement);
  },
};

export default featurePlugin;

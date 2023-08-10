import { App, createApp } from 'vue';
import FeaturePlugin from './components/FeaturePlugin.vue';
import { Features } from './main';

type FeaturePluginOptions = {
  visible?: boolean;
  prefix: string;
  locale: string;
  version: string;
  platform: string;
  accountFeatures: Features;
};

const featurePlugin = {
  install: (app: App, options: FeaturePluginOptions) => {
    const { visible = false } = options;

    if (!visible) {
      console.warn('Feature plugin is disabled');
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
    }).mount(featurePluginElement);
  },
};

export default featurePlugin;

import { App, createApp } from 'vue';
import FeaturePluginLayout from './components/layout/FeaturePluginLayout.vue';
import { FeaturePluginOptions } from '../types/features.types';

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

    createApp(FeaturePluginLayout, {
      accountFeatures: options.accountFeatures,
      locale: options.locale,
      platform: options.platform,
      prefix: options.prefix,
      version: options.version,
    }).mount(featurePluginElement);
  },
};

export default featurePlugin;

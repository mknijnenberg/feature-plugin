import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import featurePlugin from './feature-plugin';
import { version } from '../package.json';

const accountFeatures: Features = {
  errors: false,
  accountAnalytics: true,
  layout: {
    sideMenu: {
      collapsible: true,
    },
  },
  subscriptions: {
    overview: true,
    myContracts: true,
    myAnalytics: true,
    myOrders: true,
    myContractsSettings: false,
    packages: true,
  },
  accountSubscriptions: {
    active: true,
    DHLForYou: true,
    DHLEuroplus: true,
    DHLParcelConnect: true,
  },
  services: {
    appcues: true,
    hotjar: true,
    googleAnalytics: true,
  },
  settings: {
    shop: {
      shipment: {
        shippingRules: true,
        carriers: true,
        labels: true,
      },
    },
  },
} as const;

export type Features = {
  errors: boolean;
  accountAnalytics: boolean;
  layout: {
    sideMenu: {
      collapsible: boolean;
    };
  };
  subscriptions: {
    overview: boolean;
    myContracts: boolean;
    myAnalytics: boolean;
    myOrders: boolean;
    myContractsSettings: boolean;
    packages: boolean;
  };
  accountSubscriptions: {
    active: boolean;
    DHLForYou: boolean;
    DHLEuroplus: boolean;
    DHLParcelConnect: boolean;
  };
  services: {
    appcues: boolean;
    hotjar: boolean;
    googleAnalytics: boolean;
  };
  settings: {
    shop: {
      shipment: {
        shippingRules: boolean;
        carriers: boolean;
        labels: boolean;
      };
    };
  };
};

createApp(App)
  .use(featurePlugin, {
    visible: true,
    prefix: 'features',
    platform: 'myparcelnl',
    version,
    locale: 'NL',
    accountFeatures,
  })
  .mount('#app');

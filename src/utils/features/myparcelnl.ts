import { Features } from '../../types/features.types';

export const myparcelNlFeatures: Features = {
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
};

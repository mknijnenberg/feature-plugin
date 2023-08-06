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

export type FeaturePluginOptions = {
  visible: boolean;
  prefix: string;
  locale: string;
  version: string;
  platform: string;
  accountFeatures: Record<string, boolean>;
};

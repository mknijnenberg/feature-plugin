<template>
  <div class="grid grid-cols-[225px_1fr] border-b border-r border text-sm">
    <span class="min-h-[30px] pl-2 flex items-center font-bold">label</span>

    <span class="min-h-[30px] justify-center flex items-center font-bold">State</span>

    <template v-if="features">
      <FeatureItem
        v-for="(feature, key) in features"
        :key="key"
        :label="feature.label"
        :state="feature.state"
        :user="feature.user"
        @update="(newState) => setLocalState(feature, newState)"
        @init="setLocalState(feature, feature.state)"
        @remove="removeLocalState(feature)"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { inject, onBeforeMount, ref } from 'vue';
import FeatureItem from './FeatureItem.vue';
import { injectFeaturePluginAccountFeatures } from '../../utils/keys';
import { flatten } from '../../utils/flatten';

type FormattedFeature = {
  label: string;
  user: boolean | undefined;
  state: boolean;
};

const props = defineProps<{
  prefix: string;
}>();

const features = ref({});

const accountFeatures = inject(injectFeaturePluginAccountFeatures);
const flattendAccountFeatures = flatten(accountFeatures);

const storageKeys: string[] = [];
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);

  if (key) {
    storageKeys.push(key);
  }
}

const localFeatures: Record<string, boolean> = {};

for (const key in storageKeys) {
  if (!key.startsWith('features.')) {
    continue;
  }
  const featureKey = key.replace('features.', '');
  const index = Object.keys(flattendAccountFeatures).findIndex((key) => featureKey === key);

  if (!~index) {
    continue;
  }

  localFeatures[featureKey] = localStorageRaw[key].toLowerCase() === 'true';
}

const setFeatures = () => {
  const formattedFeatures: FormattedFeature[] = [];

  for (const [key, value] of Object.entries(flattendAccountFeatures)) {
    const userInput = Object.keys(localFeatures).includes(key) ? localFeatures[key] : undefined;
    const state = userInput !== undefined ? userInput : value;

    console.log(userInput, value, state);

    formattedFeatures.push({
      label: key,
      user: userInput,
      state,
    });
  }

  features.value = formattedFeatures;
};

const setLocalState = (feature: FormattedFeature, value: boolean) => {
  const KeyWithPrefix = `${props.prefix}.${feature.label}`;

  localStorage.setItem(KeyWithPrefix, value.toString());
  setFeatures();
};

const removeLocalState = (feature: FormattedFeature) => {
  const KeyWithPrefix = `${props.prefix}.${feature.label}`;

  localStorage.removeItem(KeyWithPrefix);
  setFeatures();
};

onBeforeMount(() => {
  setFeatures();
});
</script>

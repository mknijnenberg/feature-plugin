<template>
  <FeatureDashboard v-if="showDashboard" :platform="platform" :locale="locale" :version="version" :prefix="prefix" />

  <div class="z-50 absolute bg-white bottom-0 right-0 border border-gray-200 hover:bg-gray-100">
    <button class="relative flex items-center justify-center h-12 w-12 border-none bg-transparent" @click.prevent="toggleDashboard">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="24" width="24" class="hover:fill-slate-600">
        <path
          d="M5.33 12.77A4 4 0 1 1 3 5.13V5a4 4 0 0 1 5.71-3.62 3.5 3.5 0 0 1 6.26 1.66 2.5 2.5 0 0 1 2 2.08 4 4 0 1 1-2.7 7.49A5.02 5.02 0 0 1 12 14.58V18l2 1v1H6v-1l2-1v-3l-2.67-2.23zM5 10l3 3v-3H5z"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';
import { injectFeaturePluginAccountFeatures } from '../utils/keys';
import FeatureDashboard from './platform/FeatureDashboard.vue';
import { Features } from '../main';

const props = defineProps<{
  accountFeatures: Features;
  locale: string;
  platform: string;
  prefix: string;
  version: string;
  visible: boolean;
}>();

provide(injectFeaturePluginAccountFeatures, props.accountFeatures);

const showDashboard = ref(false);

const toggleDashboard = () => {
  showDashboard.value = !showDashboard.value;
};
</script>

<template>
  <FeaturePluginDashboard v-if="showDashboard" :platform="platform" :locale="locale" :version="version" :prefix="prefix" />

  <FeaturePluginToggle @toggle="toggleDashboard" />
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';
import FeaturePluginDashboard from '../dashboard/FeaturePluginDashboard.vue';
import FeaturePluginToggle from '../toggle/FeaturePluginToggle.vue';
import { injectionKeyFeaturePluginAccountFeatures } from '../../../utils/keys';

const props = defineProps<{
  accountFeatures: Record<string, boolean>;
  prefix: string;
  platform: string;
  version: string;
  locale: string;
}>();

provide(injectionKeyFeaturePluginAccountFeatures, props.accountFeatures[props.platform]);

const showDashboard = ref(true);

const toggleDashboard = () => {
  showDashboard.value = !showDashboard.value;
};
</script>

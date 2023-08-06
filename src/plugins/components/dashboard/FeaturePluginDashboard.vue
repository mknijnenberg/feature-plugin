<template>
  <div class="z-50 absolute h-[490px] w-[400px] bg-white bottom-16 right-6 shadow-md overflow-y-scroll pb-3">
    <div class="flex flex-col">
      <div class="px-2 py-4">
        <FeaturePluginDashboardStatistics :version="version" :platform="platform" :locale="locale" />
      </div>

      <div class="px-2 pb-2">
        <h2 class="mb-2 font-bold">Features</h2>

        <FeaturePluginDashboardFeatures :prefix="prefix" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FeaturePluginDashboardStatistics from './FeaturePluginDashboardStatistics.vue';
import FeaturePluginDashboardFeatures from './FeaturePluginDashboardFeatures.vue';

defineProps<{
  platform: string;
  version: string;
  locale: string;
  prefix: string;
}>();
</script>

<style scoped lang="scss"></style>

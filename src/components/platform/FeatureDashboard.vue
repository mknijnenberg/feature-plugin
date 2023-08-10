<template>
  <div class="z-50 absolute h-[490px] w-[400px] bg-white bottom-16 right-6 shadow-md overflow-y-scroll pb-3">
    <div class="flex flex-col">
      <div class="px-2 py-4">
        <PlatformStatistics :version="version" :platform="platform" :locale="locale" />
      </div>

      <div class="px-2 pb-2">
        <h2 class="mb-2 font-bold">Features</h2>

        <PlatformFeatures :prefix="prefix" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PlatformStatistics from './PlatformStatistics.vue';
import PlatformFeatures from './PlatformFeatures.vue';

defineProps<{
  platform: string;
  version: string;
  locale: string;
  prefix: string;
}>();
</script>

<style scoped lang="scss"></style>

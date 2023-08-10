<template>
  <div class="grid grid-cols-2">
    <template v-if="platform">
      <span>Platform:</span>
      <span>{{ platform }}</span>
    </template>

    <template v-if="version">
      <span>Versie:</span>
      <span>{{ version }}</span>
    </template>

    <template v-if="locale">
      <span>Taal:</span>
      <span>{{ locale }}</span>
    </template>
  </div>
</template>

<script setup lang="ts">
defineProps({
  platform: {
    type: String,
    required: false,
    default: null,
  },
  version: {
    type: String,
    required: false,
    default: null,
  },
  locale: {
    type: String,
    required: false,
    default: null,
  },
});
</script>

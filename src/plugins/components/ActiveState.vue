<template>
  <template v-if="active">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20" width="20" class="fill-green-500">
      <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z" />
    </svg>
  </template>

  <template v-else>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20" width="20" class="fill-red-500">
      <path
        d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"
      />
    </svg>
  </template>
</template>

<script setup lang="ts">
defineProps<{
  active: boolean;
}>();
</script>

<template>
  <input type="checkbox" :id="`switch_${label}`" v-model="value" />
  <label :for="`switch_${label}`">Toggle</label>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  label: string;
  modelValue: boolean;
}>();

const emit = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
</script>

<style scoped lang="scss">
input[type='checkbox'] {
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  @apply relative block bg-red-500 cursor-pointer rounded-full;

  cursor: pointer;
  text-indent: -9999px;
  width: 40px;
  height: 20px;
}

label:after {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 90px;
  transition: 0.3s;
}

input:checked + label {
  @apply bg-green-500;
}

input:checked + label:after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
}

label:active:after {
  width: 20px;
}
</style>

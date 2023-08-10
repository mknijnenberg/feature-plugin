<template>
  <span class="border border-l border-b min-h-[40px] px-2 break-all">{{ label }}</span>

  <span class="border border-l border-b min-h-[40px] grid grid-cols-3 justify-between items-center">
    <div class="flex justify-center">
      <ActiveState :active="state" />
    </div>

    <div class="col-span-2">
      <template v-if="showInput">
        <div class="flex justify-center gap-2">
          <SwitchInput :label="label" :model-value="state" @update:modelValue="handleUpdateUserInput" />

          <button class="opacity-30 hover:opacity-100" @click="handleHideInput">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="16" width="16"><path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z" /></svg>
          </button>
        </div>
      </template>

      <template v-else>
        <div class="flex justify-end pr-3">
          <button class="opacity-30 hover:opacity-100" @click="handleShowInput">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="16" width="16"><path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" /></svg>
          </button>
        </div>
      </template>
    </div>
  </span>
</template>

<script setup lang="ts">
import ActiveState from '../ActiveState.vue';
import { onMounted, ref } from 'vue';
import SwitchInput from '../ui/SwitchInput.vue';

const props = defineProps<{
  label: string;
  state: boolean;
  user: boolean | undefined;
}>();

const emit = defineEmits(['init', 'update', 'remove']);

const showInput = ref(false);

const handleShowInput = () => {
  showInput.value = true;

  emit('init');
};

const handleUpdateUserInput = (newState: boolean) => {
  emit('update', newState);
};

const handleHideInput = () => {
  showInput.value = false;

  emit('remove');
};

onMounted(() => {
  if (props.user === undefined) {
    return;
  }

  showInput.value = true;
});
</script>

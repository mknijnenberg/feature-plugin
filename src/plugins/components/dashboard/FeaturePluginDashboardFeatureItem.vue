<template>
  <span class="border border-l border-b min-h-[40px] px-2 break-all">{{ label }}</span>

  <span class="border border-l border-b min-h-[40px] grid grid-cols-3 justify-between items-center">
    <div class="flex justify-center">
      <ActiveState :active="state" />
    </div>

    <div class="col-span-2">
      <template v-if="showInput">
        <div class="flex justify-center gap-2">
          <input type="checkbox" :id="`switch_${label}`" :checked="state" @change="$emit('update')" />
          <label :for="`switch_${label}`">Toggle</label>

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
  width: 50px;
  height: 30px;
}

label:after {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  width: 20px;
  height: 20px;
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
  width: 30px;
}
</style>

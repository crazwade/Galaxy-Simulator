<template>
  <div
    class="h-full w-1/3 cursor-pointer flex flex-col justify-evenly items-center pt-2 pb-2"
    :class="bgColor"
    @click="handleClick(button.name)"
  >
    <img
      class=" h-1/2 w-auto"
      :src="button.image"
    >
    <div class=" font-extrabold text-4xl mt-5 text-gray-50">
      {{ button.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  button: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  activeButton: {
    type: String,
    required: true
  }
});

const emit = defineEmits(["open"]);

const bgColor = computed(() => {
  switch (props.index) {
    case 0:
      return "bg-orange-400";
    case 1:
      return "bg-blue-400";
    default:
      return "bg-red-400";
  }
});

const handleClick = (buttonName: string) => {
  emit("open", buttonName);
};
</script>

<template>
  <div>
    <div
      v-show="props.visable"
      class="h-full w-full flex"
    >
      <MenuButton
        v-for="(button, index) in props.menu"
        :key="button.name"
        :button="button"
        :index="index"
        :active-button="activeButton"
        @menuOpen="handleMenuOpen"
      />
    </div>
    <div
      v-show="!props.visable"
      class="h-full w-full flex"
    >
      <MenuButton
        v-for="(button, index) in props.menu"
        v-show="button.name === activeButton"
        :key="button.name"
        :button="button"
        :index="index"
        :active-button="activeButton"
        @menuOpen="handleMenuOpen"
      />
      <div class=" h-full w-2/3 bg-slate-400">
        test
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MenuButton from "./components/MenuButton.vue";

const props = defineProps<{
  menu: {
    name: string;
    image: string;
  }[];
  visable: boolean
}>();

const emit = defineEmits(["menuOpen"]);

const activeButton = ref("display");

const handleMenuOpen = (buttonName: string) => {
  emit("menuOpen");

  if (buttonName === activeButton.value) {
    activeButton.value = "display";
    return;
  }

  activeButton.value = buttonName;
};
</script>

<style scoped>
</style>
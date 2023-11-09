<template>
  <div>
    <div
      class="h-full w-full flex"
    >
      <TransitionGroup name="buttons">
        <MenuButton
          v-for="(button, index) in props.menu"
          v-show="button.name === activeButton || props.visable"
          :key="button.name"
          :button="button"
          :index="index"
          :active-button="activeButton"
          @open="handleMenuOpen"
        />
      </TransitionGroup>
      <div
        v-if="settingAreaVisable"
        class=" h-full w-2/3 bg-slate-400"
      >
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
const settingAreaVisable = ref(false);

const handleMenuOpen = (buttonName: string) => {
  emit("menuOpen");

  if (buttonName === activeButton.value) {
    activeButton.value = "display";
    settingAreaVisable.value = false;
    return;
  }

  activeButton.value = buttonName;

  setTimeout(() => {
    settingAreaVisable.value = true;
  }, 200);
};
</script>

<style scoped>
.buttons-enter-active,
.buttons-leave-active {
  transition: all 0.2s linear;
}
.buttons-enter-from,
.buttons-leave-to {
  opacity: 0;
}
</style>
<template>
  <div class="flex flex-col justify-center items-center w-full h-full">
    <MainArea
      class="h-[85vh] w-full bg-cover"
      style="background-image: url('src/assets/background/spaceBG.jpg');"
    />
    <MenuArea
      class="h-[15vh] w-full bg-emerald-100"
      style="background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);"
      :menu="store.menu"
      :visable="store.menuAreaVisable"
      @menuOpen="menuClickEvent"
    />
  </div>
</template>

<script setup lang="ts">
import MenuArea from "./view/MenuArea/MenuArea.vue";
import MainArea from "./view/MainArea.vue";
import { usePlanetStore } from "@/store/store.ts";

const store = usePlanetStore();

const menuClickEvent = () => {
  store.menuAreaVisable = !store.menuAreaVisable;
};
</script>

<style scoped>
</style>
./store/index.js
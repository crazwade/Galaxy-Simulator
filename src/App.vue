<script setup lang="ts">
import MenuArea from "./view/MenuArea.vue";
import MainArea from "./view/MainArea.vue";
import { usePlanetStore } from "@/store/store.ts";

const store = usePlanetStore();
</script>

<template>
  <div class="flex flex-col justify-center items-center w-full h-full">
    <MainArea class="h-[85vh] w-full bg-orange-100" />
    <MenuArea class="h-[15vh] w-full bg-emerald-100" />
  </div>
</template>

<style scoped>
</style>
./store/index.js
<script setup>
import { useTopStore } from "@/stores/top";

const publicPath = import.meta.env.BASE_URL

const props = defineProps({
  id: Number
});
</script>

<template>
  <div class="d-flex justify-center player-status-block">
    <div class="mr-2 ml-2" v-for="images in useTopStore().currentPlayers[id].images">
        <div class="d-flex align-center pt-1 pb-1" v-if="images.value">
          <img :src="`${publicPath}icons/circle.svg`"  width="28px" height="28px">
        </div>
        <div class="d-flex align-center pt-1 pb-1" v-else>
          <img :src="`${publicPath}icons/close.svg`"  width="28px" height="28px">
        </div>
    </div>
  </div>
</template>

<style scoped>
.player-status-block {
  border: solid 3px;
  border-radius: 40px;
  background-color: white;
  width: 300px;
  box-shadow: 0 6px 6px 1px rgba(0, 0, 0, 0.25);
}
</style>

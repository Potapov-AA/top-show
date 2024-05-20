<script setup>
import { useTopStore } from "@/stores/top";


</script>

<template>
  <div class="d-flex justify-space-around">
    <div class="d-flex" v-for="player in useTopStore().currentPlayers">
      <div v-for="images in player.images">
        <div v-if="images.value">
          <v-icon icon="mdi-circle-outline" />
        </div>
        <div v-else>
          <v-icon icon="mdi-close-thick" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script setup>
import { useTopStore } from '@/stores/top'

const props = defineProps({
  name: String,
  imageName: String,
  half: Number,
});

function getImage(imageName) {
  return new URL("../assets/images/" + imageName + ".jpg", import.meta.url).href;
}
</script>

<template>
  <v-card width="45vw" height="85vh" class="mr-5 ml-5">
    <v-card-title class="text-center">
      {{ props.name }}
    </v-card-title>
    <v-img
      class="fill-height"
      aspect-ratio="1/1"
      cover
      :src="getImage(props.imageName)"
      @click="useTopStore().updateArray(props.half)"
    />
  </v-card>
</template>

<style scoped></style>

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
  <div class="border" style="height: 74vh;"> 
    <div class="top-title-block" style="height: 6%;">
      <p class="text-top-title" align="center">{{ props.name }}</p>
    </div>
    <div class="top-image-block d-flex" style="height: 94%;">
      <v-img
        aspect-ratio="1/1"
        :src="getImage(props.imageName)"
        @click="useTopStore().updateArray(props.half)"
      />
    </div>
  </div>
</template>

<style scoped>
.top-title-block {
  border: solid 3px;
  border-radius: 30px 30px 0px 0px;
  background-color: white;
  box-shadow: 0 10px 6px 1px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index:1;
}

.text-top-title {
  font-size: 24px;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-style: normal;
}

.top-image-block {
  border-right: solid 3px;
  border-bottom: solid 3px;
  border-left: solid 3px;
  border-radius: 0px 0px 60px 60px;
  background: white;
  box-shadow: 5px 10px 6px 1px rgba(0, 0, 0, 0.25);
  position: relative;
}
</style>
